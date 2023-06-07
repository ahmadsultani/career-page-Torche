import React from "react";

export default function InputField(props) {
  const { title, type, placeholder, value, onChange, labelText, width } = props;
  return (
    <div
      className={`relative flex flex-col gap-[8px] w-full ${width} font-cairo`}
    >
      <h1 className="font-[#151515] font-bold">{title}</h1>
      <label className=" text-xs-regular top-0 left-3 px-1 bg-white absolute text-neutral-500">
        {labelText}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={1}
        className="w-full px-4 py-[10px] rounded-lg border-[1px] text-s-regular border-primaryNavy-border hover:border-primaryBlue-hover focus-visible:border-primaryBlue-main  focus:outline-none focus:border-primaryNavy-focus "
      />
    </div>
  );
}
