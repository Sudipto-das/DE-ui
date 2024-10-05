
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { IoMdClose } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { RoomType, ColorScheme, DesignType, SeasonalDecor } from "./constants/constants";
import InputSelect from "./reusable-basic/inputSelect";
import InputName from "./reusable-basic/inputName";
import { BASE_API_URL } from "../../api";
import { storage } from "../../utils/firebase";
import { UserErrorInterface } from "./interface/userInterface";
import { AppContext } from "../../context/Context";
import InputFile from "./reusable-basic/inputFile";


const blankDesign = {
    uid: "",
    design_id: "",
    design_name: "",
    design_type: "",
    file: "",
    room_type: "",
    virtual_staging: false,
    designed_image: "",
    no_of_ideas: 1,
    created_at: "",
    color_scheme: "COLOR_SCHEME_0",
    seasonal_decor: "SPECIALITY_DECOR_0",
    generate_design_with_original: false,
};

interface DesignInterface {
    name: string;
    url: string;
}

export default function DesignAI() {
    const { setLoadingState, user } = React.useContext(AppContext);
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const [error, setError] = React.useState<UserErrorInterface>({
        message: "",
        hasError: false,
        field: "",
    });

    const [seasonal_decor, setSeasonalDecor] = React.useState<string>("");
    const [color_scheme, setColorScheme] = React.useState<string>("");

    const [mouseEnterSeletDesign, setMouseEnterSeletDesign] =
        React.useState<boolean>(false);

    const [allDesigns, setAllDesigns] = React.useState<DesignInterface[]>(
        [] as DesignInterface[]
    );

    const [selectedDesign, setSelectedDesign] = React.useState<DesignInterface>(
        {} as DesignInterface
    );

    const getDetails = React.useRef(() => { });

    const [designInfo, setDesignInfo] = React.useState(blankDesign);

    const [userDesignsInfo, setUserDesignsInfo] = React.useState({
        uid: "",
        design_credits: 0,
        design_count: 0,
    });

    function onChangeHandler(type: string, value: any) {
        setDesignInfo({ ...designInfo, [type]: value });
    }

    async function UploadFile(
        name: string,
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const fileType = e.target.files![0].type;

        if (fileType !== "image/jpeg" && fileType !== "image/png") {
            setError({
                hasError: true,
                message: "Please upload a valid image file",
                field: "file",
            });
            return;
        }

        // 4 mb max
        if (e.target.files![0].size > 4000000) {
            setError({
                hasError: true,
                message: "File size should be less than 4mb",
                field: "file",
            });
            return;
        }

        if (
            userDesignsInfo.design_credits <= 0 ||
            userDesignsInfo.design_credits === null
        ) {
            setError({
                hasError: true,
                message: "You don't have enough credits",
                field: "file",
            });
            return;
        }
        console.log(name)
        setLoadingState(true);
        const file = e.target.files![0];
        const storageRef = ref(
            storage,
            `designs/before/${user.email + "_" + file.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log("Upload is " + progress + "% done");
                setUploadProgress(progress)
                switch (snapshot.state) {
                    case "paused":
                        // console.log("Upload is paused");
                        break;
                    case "running":
                        // console.log("Upload is running");
                        break;
                }
            },

            (error) => {
                setError({
                    hasError: true,
                    message: error.message,
                    field: "file",
                });
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    setDesignInfo({ ...designInfo, file: downloadURL });
                });
            }

        );

        setLoadingState(false);
    }

    async function generateDesigns() {
        try {
            if (!designInfo.file) {
                setError({
                    hasError: true,
                    message: "Please upload a file",
                    field: "file",
                });
                return;
            }

            if (!designInfo.design_type) {
                setError({
                    hasError: true,
                    message: "Please select a design type",
                    field: "des",
                });
                return;
            }

            if (!designInfo.room_type) {
                setError({
                    hasError: true,
                    message: "Please select a room type",
                    field: "file",
                });
                return;
            }

            setLoadingState(true);

            designInfo.uid = user.uid;

            const data = await fetch(
                BASE_API_URL + "/user/india/initialize-design",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(designInfo),
                }
            ).then((res) => res.json());
            setDesignInfo(data.data);

            const res = await fetch(
                BASE_API_URL + "/user/india/generate-design",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data.data),
                }
            ).then((res) => res.json());
            if (res.error) {
                setError({
                    hasError: true,
                    message: res.error,
                    field: "file",
                });
                setLoadingState(false);
                return;
            }

            const newDesign = res.data.designed_image.map(
                (item: any, idx: number) => {
                    return {
                        name: designInfo.design_name + " " + (idx + 1),
                        url: item,
                    };
                }
            );

            setDesignInfo({
                ...designInfo,
                file: designInfo.file,
            });
            setUserDesignsInfo({
                ...userDesignsInfo,
                design_credits: userDesignsInfo.design_credits - designInfo.no_of_ideas,
            });
            setAllDesigns([...allDesigns, ...newDesign]);

            if (selectedDesign.url === "" || selectedDesign.url === undefined) {
                setSelectedDesign(newDesign[0]);
            }

            setLoadingState(false);
        } catch (err) {
            setLoadingState(false);
        }
    }

    getDetails.current = async () => {
        const data = await fetch(
            BASE_API_URL +
            "/user/india/get-details?" +
            new URLSearchParams({ uid: user.uid }),
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => res.json());
        console.log(data);
        setUserDesignsInfo(data.data);
    };

    function downloadDesign() {
        // create blob and download
        fetch(selectedDesign.url)
            .then((res) => res.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", selectedDesign.name + ".jpg");
                document.body.appendChild(link);
                link.click();
                link.remove();
            });
    }

    React.useEffect(() => {
        getDetails.current();
    }, []);
    console.log(uploadProgress)
    return (
        <>
            <div className="flex justify-between items-start flex-col md:flex-row border rounded-md p-5 md:justify-center ">
                <div className="md:w-[50%] w-full">
                    <InputName
                        defValue=""
                        name="design_name"
                        label="Design Name"
                        onChangeHandler={onChangeHandler}
                        error={
                            error.hasError && error.field === "name" ? error.message : ""
                        }
                        placeholder="Please enter Design Name"
                    />
                    <InputSelect
                        defValue=""
                        name="room_type"
                        label="Room Type"
                        onChangeHandler={onChangeHandler}
                        error={
                            error.hasError && error.field === "room_type" ? error.message : ""
                        }
                        selectArray={RoomType}
                    />

                    <div className="flex md:justify-around justify-start items-start md:items-center md:flex-row flex-col">
                        <div className="flex justify-start items-center my-2">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6 bg-gray-200 border-2 border-gray-400 rounded-full appearance-none checked:bg-[#004D3D] checked:border-[#004D3D] transition-all duration-300 cursor-pointer focus:outline-none"
                                />
                                <p className="text-black text-[16px] font-semibold mx-2">
                                    Small Room Size
                                </p>
                            </label>
                        </div>

                        <div className="flex justify-start items-center my-2">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    onChange={(e) =>
                                        onChangeHandler("generate_design_with_original", e.target.checked)
                                    }
                                    type="checkbox"
                                    className="w-6 h-6 bg-gray-200 border-2 border-gray-400 rounded-full appearance-none checked:bg-[#004D3D] checked:border-[#004D3D] transition-all duration-300 cursor-pointer focus:outline-none"
                                />
                                <p className="text-black text-[16px] font-semibold mx-2">
                                    Generate Designs with original
                                    <br />
                                    images dimensions (Slower!)
                                </p>
                            </label>
                        </div>
                    </div>

                    {designInfo.file ? (
                        <div className="w-full h-auto relative">
                            <div
                                className="absolute -top-2 -right-2 text-[#fff] bg-[#004d3d] rounded-full cursor-pointer p-1"
                                onClick={() =>
                                    setDesignInfo({
                                        ...designInfo,
                                        file: "",
                                    })
                                }
                            >
                                <IoMdClose />
                            </div>
                            <img
                                src={designInfo.file}
                                width={200}
                                height={200}
                                alt="design"
                                className="w-full  my-3 rounded-md "
                            />
                        </div>
                    ) : (
                        <InputFile
                            defValue=""
                            name="file"
                            onFileChange={UploadFile}
                            error={
                                error.hasError && error.field === "file" ? error.message : ""
                            }
                        />
                    )}

                    <div className="w-full">
                        <div className="flex overflow-x-auto my-1 py-3 scrollbar-hide">
                            {DesignType.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() =>
                                        setDesignInfo({ ...designInfo, design_type: item.value })
                                    }
                                    className={` flex flex-col items-center px-3 mx-1 cursor-pointer w-[30%]`}
                                >
                                    <img
                                        width={260}

                                        src={item.image}
                                        alt="design"
                                        className={
                                            `w-[160px] h-[120px] object-cover rounded-lg hover:shadow-2xl hover:scale-105 transition-all ` +
                                            (designInfo.design_type === item.value
                                                ? "border-2 border-[#004d3d]"
                                                : "border-2 border-white")
                                        }
                                    />
                                    <p className="text-black text-[14px] my-2 mb-3 font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-[10rem] text-center">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="flex justify-between items-center w-full my-3">
                        <p className="bg-[#004D3D] px-3 py-2 text-white font-semibold rounded-md">
                            Virtual Staging
                        </p>
                        <input
                            type="checkbox"
                            className="toggle [--tglbg:white] bg-[#004d3d] hover:bg-[#004d3d] h-[2rem] w-[3.5rem] border-2 border-[#004d3d]"
                            onChange={() => onChangeHandler("virtual_staging", true)}
                        />
                    </div>

                    <div className="flex justify-between items-center w-full md:px-3 flex-col md:flex-row">
                        <div className="text-start text-black my-5">
                            <p className="text-[16px] font-semibold ">Number of Ideas</p>
                            <div className="flex justify-center items-center">
                                {[1, 2, 3, 4].map((item: number, idx) => (
                                    <p
                                        key={idx}
                                        className={
                                            "w-[30px] h-[30px] items-center flex justify-center rounded-md mx-1 font-medium cursor-pointer " +
                                            (designInfo.no_of_ideas === item
                                                ? "bg-[#004d3d] text-white"
                                                : "bg-white text-black")
                                        }
                                        onClick={() => onChangeHandler("no_of_ideas", item)}
                                        style={{
                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                        }}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full md:w-[60%]">
                            <div className="text-center text-black my-5 mr-2">
                                <p className="text-[16px] font-semibold ">Color Scheme</p>
                                <details className="dropdown">
                                    <summary className="text-[12px]  marker:hidden font-semibold my-2 bg-[#004d3d] text-yellow-400 px-2 py-1 rounded-md">
                                        {color_scheme === "" ? "Choose" : color_scheme}
                                    </summary>
                                    <ul className=" menu flex-nowrap p-0 dropdown-content  text-start bg-white shadow-xl rounded-box w-60 z-[1000000] max-h-[120px] overflow-y-scroll scroll-hide">
                                        {ColorScheme.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="hover:bg-primary-500 hover:bg-[#004d3d] hover:text-yellow-400 p-2 pl-4 cursor-pointer transition-all "
                                                onClick={() => {
                                                    setColorScheme(item);
                                                    onChangeHandler(
                                                        "color_scheme",
                                                        "COLOR_SCHEME_" + idx
                                                    );
                                                }}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                            <div className="text-center text-black my-5 ml-2">
                                <p className="text-[16px] font-semibold ">Seasonal Decor</p>
                                <details className="dropdown">
                                    <summary className="text-[12px] font-semibold my-2 bg-[#004d3d] text-yellow-400 px-2 py-1 rounded-md">
                                        {seasonal_decor === "" ? "Choose" : seasonal_decor}
                                    </summary>
                                    <ul className=" menu flex-nowrap p-0 dropdown-content  text-start bg-white shadow-xl rounded-box w-60 z-[1000000] max-h-[120px] overflow-y-scroll scroll-hide">
                                        {SeasonalDecor.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="hover:bg-primary-500 hover:bg-[#004d3d] hover:text-yellow-400 p-2 pl-4 cursor-pointer transition-all "
                                                onClick={() => {
                                                    setSeasonalDecor(item);
                                                    onChangeHandler(
                                                        "seasonal_decor",
                                                        "SPECIALITY_DECOR_" + idx
                                                    );
                                                }}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-black text-[16px] font-semibold">
                        Design Credits: {userDesignsInfo.design_credits}
                    </p>
                    <div className="flex justify-center items-center w-full">
                        {userDesignsInfo.design_credits <= 0 ? (
                            <a
                                href={"/subscriptions"}
                                className="px-4 py-2 m-2 text-white bg-[#004d3d] rounded-md cursor-pointer"
                            >
                                Add Credits
                            </a>
                        ) : (
                            <button
                                onClick={generateDesigns}
                                className="px-4 py-2 m-2 text-white bg-[#004d3d] rounded-md cursor-pointer"
                            >
                                Create Design
                            </button>
                        )}
                    </div>
                </div>
                {allDesigns.length > 0 && (
                    <div className="w-full md:w-[40%]">
                        <div
                            className="w-full relative"
                            onMouseEnter={() => setMouseEnterSeletDesign(true)}
                            onMouseLeave={() => setMouseEnterSeletDesign(false)}
                        >
                            {mouseEnterSeletDesign && (
                                <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 z-10">
                                    <div className="bg-black opacity-50 w-full h-full top-0 left-0"></div>
                                    <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 z-20">
                                        <div className="flex justify-around items-center w-11/12 mx">
                                            <button
                                                onClick={downloadDesign}
                                                className="px-4 py-2 m-2 text-[#facc15] bg-[#004d3d] rounded-md cursor-pointer flex justify-center items-center"
                                            >
                                                <FaDownload className="mr-2" />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <img
                                src={selectedDesign.url}
                                width={300}
                                height={300}
                                alt={selectedDesign.name}
                                className="w-full  my-3 rounded-md relative z-0"
                            />
                        </div>

                        <div className="w-full">
                            <div className=" w-full scroll-design-ai my-1 py-3 ">
                                {allDesigns.map((item, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedDesign(item)}
                                        className={`carousel-item flex flex-col items-center w-[150px] pr-4 mx-1 cursor-pointer`}
                                    >
                                        <img
                                            width={160}
                                            height={100}
                                            src={item.url}
                                            alt="design"
                                            className={
                                                `w-[160px] h-auto rounded-lg hover:shadow-2xl hover:scale-105 transition-all ` +
                                                (selectedDesign.url === item.url
                                                    ? "border-2 border-[#004d3d]"
                                                    : "border-2 border-white")
                                            }
                                        />
                                        <p className="text-black text-[14px] my-2 mb-3 font-semibold">
                                            {item.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
