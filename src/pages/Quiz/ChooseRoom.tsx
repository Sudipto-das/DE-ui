
import React from "react";
import RoomsInterface from "../../interface/Room";
import RoomsAvailable from "../../common/Rooms";
import { Link, useNavigate } from "react-router-dom";
import { QuizHeader } from "./QuizHeader";


export default function ChooseRooms() {
    const navigate = useNavigate()
    const [rooms, setRooms] = React.useState<RoomsInterface[]>([] as RoomsInterface[]);
    const [totalQty, setTotalQty] = React.useState<number>(0);

    function AddItem(item: RoomsInterface) {
        let newRooms = [...rooms];
        let flag = false;
        newRooms.forEach((room: RoomsInterface) => {
            if (room.id === item.id) {
                room.qty = room.qty! + 1;
                flag = true;
            }
        });
        if (!flag) {
            item.qty = 1;
            newRooms.push(item);
        }
        setRooms(newRooms);
    }

    function RemoveItem(item: RoomsInterface) {
        let newRooms = [...rooms];
        newRooms.forEach((room: RoomsInterface) => {
            if (room.id === item.id && room.qty! > 0) {
                room.qty = room.qty! - 1;
            }
        });
        setRooms(newRooms);
    }
    const handleClick = () =>{
        navigate('/consolation')
    }

   

    React.useEffect(() => {
        let total = 0;
        rooms.forEach((item: RoomsInterface) => {
            total += item.qty || 0;
        });
        setTotalQty(total);
    }, [rooms]);

    return (
        <>
            <QuizHeader heading={"What rooms are on your it needs something list?"} subheading={"Decisions are hard pick as many as you want"} display={totalQty>0} onClick={handleClick}/>
            <div className="mx-auto my-10 grid h-fit w-[95%] grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-[1rem] text-center lg:w-full lg:grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))]">
                {RoomsAvailable.map((room: RoomsInterface, idx: number) => {
                    let flag = false;
                    let qty = 0;

                    rooms.forEach((item: RoomsInterface) => {
                        if (item.id === room.id && item.qty! > 0) {
                            flag = true;
                            qty = item.qty || 0;
                        }
                    });

                    if (room.id === "11") {
                        return (
                            <Link

                                className="mx-[5px] h-fit  cursor-pointer py-4 "
                                key={idx} to={""}              >
                                <div
                                    style={{
                                        filter: flag
                                            ? "drop-shadow(0px 10px 50px rgba(240, 188, 44, 0.15))"
                                            : "none",
                                    }}
                                >
                                    <div
                                        className={`mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-[50%] border-[3px] bg-white duration-150 ${flag ? "border-[#ffba19]" : "border-transparent"
                                            }`}
                                    >
                                        <img
                                            width={500}
                                            height={500}
                                            src={room.img}
                                            alt="Beginner"
                                            className="mx-auto h-fit w-fit"
                                        />
                                    </div>
                                </div>
                                <p className="mt-5 text-[16px] font-[600] leading-[24px] text-[#23262F]">
                                    {room.name}
                                </p>
                            </Link>
                        );
                    }
                    return (
                        <div className="mx-[5px] h-fit  cursor-pointer py-4 " key={idx}>
                            <div
                                style={{
                                    filter: flag
                                        ? "drop-shadow(0px 10px 50px rgba(240, 188, 44, 0.15))"
                                        : "none",
                                }}
                            >
                                <p className="mb-5 text-[16px] font-[400] leading-[24px] text-[#23262F]">
                                    {room.name}
                                </p>
                                <div
                                    className={`mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-[50%] border-[3px] border-[#1B454D] bg-white duration-150 `}
                                >
                                    <img
                                        width={500}
                                        height={500}
                                        src={room.img}
                                        alt="Beginner"
                                        className="mx-auto h-fit w-fit"
                                    />
                                </div>
                                <div className="flex justify-center items-center mt-5 w-fit mx-auto overflow-hidden rounded-md">
                                    <p
                                        onClick={() => RemoveItem(room)}
                                        className="text-[#fff] bg-[#1B454D] text-[20px] w-[28px] flex justify-center items-center cursor-pointer"
                                    >
                                        -
                                    </p>
                                    <p className="w-[50px] text-white text-[20px] bg-green-500">
                                        {qty}
                                    </p>
                                    <p
                                        onClick={() => AddItem(room)}
                                        className="text-[#fff] bg-[#1B454D] text-[20px] w-[28px] flex justify-center items-center cursor-pointer"
                                    >
                                        +
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            
        </>
    );
}