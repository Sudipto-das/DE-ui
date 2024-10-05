

import React from "react";
import Input from "../interface/input";

export default function InputName(props: Input) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (props.onChangeHandler) {
      props.onChangeHandler(props.name, e.target.value);
    }
  }


  return (
    <div className={"text-start my-2 font-inter " + props.inputClassName}>
      {props.label && (
        <label
          htmlFor={props.name ? props.name : "name"}
          className="text-[16px] block leading-[24px] text-[#23262F] font-[700] my-1 md:my-2"
        >
          {props.label}
        </label>
      )}
      <input
        type="text"
        name={props.name ? props.name : "name"}
        disabled={props.disabled ? true : false}
        defaultValue={props.defValue}
        placeholder={props.placeholder ? props.placeholder : `Enter Name`}
        onChange={(e) => onChange(e)}
        className={
          "border rounded-lg p-2 w-full"
        }
        style={{ borderColor: "rgb(189, 189, 189)" }}
      />
      {props.error && <p className="text-[12px] text-red-500">{props.error}</p>}
    </div>
  );
}
