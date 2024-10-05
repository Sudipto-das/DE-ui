import React from "react";


import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Input from "../interface/input";

export default function InputSelect(props: Input) {
  const [show, setShow] = React.useState(false);
  const [fileteredCountries, setFilteredCountries] =
    React.useState(props.selectArray   || []);

    const inputRef = React.useRef<HTMLInputElement>(null);

  function Show() {
    if (!props.disabled) {
      setShow(!show);
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setShow(true);
    let filtered = props.selectArray!.filter((data) => {
      return data.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (filtered.length === 0) {
      filtered = props.selectArray!.filter((data) => {
        return data.value!
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
    }
    setFilteredCountries(filtered);
  }

  function onCountryClick(data:any) {
    inputRef.current!.value = data.name;
    setShow(false);
    if (props.onChangeHandler) {
      props.onChangeHandler(props.name, data.value);
    }
    setFilteredCountries(props.selectArray || []);
  }

  React.useEffect(() => {
  inputRef.current!.value = props.defValue || "";
  }, [props.defValue]);


  return (
    <>
      <div className={"w-full h-fit text-start my-2 " + props.inputClassName}>
        {props.label && (
          <label
            htmlFor={props.name ? props.name : "password"}
            className="text-[16px] block leading-[24px] text-[#23262F] font-[700] my-1 md:my-2"
          >
            {props.label}
          </label>
        )}
        <div className="relative w-full">
          <div
            className="absolute right-4"
            onClick={Show}
            style={{ top: "13.5px" }}
          >
            {show ? (
              <IoMdArrowDropup className="text-[#777E91] text-[20px] cursor-pointer" />
            ) : (
              <IoMdArrowDropdown className="text-[#777E91] text-[20px] cursor-pointer" />
            )}
          </div>
          <input
            type="text"
            ref={inputRef}
            disabled={props.disabled ? true : false}
            name={props.name ? props.name : "select"}
            onChange={(e) => onChange(e)}
            onClick={Show}
            placeholder={props.placeholder ? props.placeholder : `Select`}
            className={
              "w-full p-3 rounded-lg text-[14px] text-black font-medium disabled:bg-white disabled:text-black placeholder:font-normal placeholder:text-[#000] bg-white border"
            }
            style={{ borderColor: "rgb(189, 189, 189)" }}
          />
          {props.error && (
            <p className="text-[12px] text-red-500">{props.error}</p>
          )}
          {show && (
            <div className="absolute z-50 mt-2 top-full left-0 w-full bg-white rounded-lg shadow-md border border-gray-200 h-fit  max-h-[200px] overflow-y-scroll scroll-hide">
              {fileteredCountries.map((data, i) => (
                <div
                  key={i}
                  onClick={() => onCountryClick(data)}
                  className="flex items-center justify-between text-black px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-[#004D3D] hover:text-white  transition-all"
                >
                    <p className="text-[16px]  country-flag ">{data.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
