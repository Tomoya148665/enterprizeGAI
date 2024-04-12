import React from "react";

const Subheader = () => {
  return (
    <div className="self-stretch bg-snow flex flex-col ">
      <div className="flex flex-row justify-between items-center self-stretch py-[19px] px-8">
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <b className="relative leading-[18px]">商談反省</b>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-5 relative h-5 bg-[url('/public/image-6@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        </div>
        <div className="flex flex-row items-end justify-center gap-[10px]">
          <div className="relative leading-[18px]">gpt-4[品質重視]</div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[18px] relative h-[18px] bg-[url('/public/image-7@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        </div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] w-full border-solid border-silver-100" />
    </div>
  );
};

export default Subheader;
