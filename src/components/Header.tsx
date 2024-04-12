import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="sticky top-0 self-stretch flex flex-row items-center justify-between py-4 h-[5vh] px-[23px] text-left text-xl text-darkslategray font-inter border-b-[1px] border-solid border-lightgray-100">
      <img
        className="w-[210px] relative h-14 object-cover"
        alt=""
        src="/image-8@2x.png"
      />
      <div className="flex flex-row items-center justify-center gap-[34px]">
        <div className="rounded-mini bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 gap-[10px] md:hidden">
          <input
            className="[border:none] [outline:none] font-inter text-sm bg-[transparent] w-[150px] relative text-dimgray text-left inline-block shrink-0"
            placeholder="Search"
            type="text"
          />
          <img className="w-5 relative h-[17px]" alt="" src="/union.svg" />
        </div>
        <div className=" relative inline-block shrink-0 md:hidden">
          伊藤　大地
        </div>
        <img
          className="w-[31px] relative rounded-2xs h-[31px] object-cover md:hidden"
          alt=""
          src="/202011070001493w500-0-2@2x.png"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[42px] w-[42px] relative bg-[url('/public/image-10@3x.png')] bg-cover bg-no-repeat bg-[top] hidden md:flex" />
      </div>
    </div>
  );
};

export default Header;
