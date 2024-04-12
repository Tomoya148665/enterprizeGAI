import { FunctionComponent } from "react";
import UserComment from "./UserComment";
import AIComment from "./AIComment";

interface CenterProps {
  selectedText: string;
  setSelectedText: (text: string) => void;
}

const Center: FunctionComponent<CenterProps> = ({
  selectedText,
  setSelectedText,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedText(event.target.value);
  };

  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-between text-left text-base text-black font-inter">
      <div className="self-stretch bg-snow flex flex-row items-center justify-between pt-[19px] pb-[27px] px-8">
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <b className="relative leading-[18px]">商談反省</b>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-5 relative h-5 bg-[url('/public/image-6@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        </div>
        <div className="flex flex-row items-end justify-center gap-[10px]">
          <div className="relative leading-[18px]">gpt-4[品質重視]</div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[18px] relative h-[18px] bg-[url('/public/image-7@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        </div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-silver-100" />
      <div className="self-stretch flex-1 flex flex-col items-center justify-end gap-[10px] text-xs">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-16 gap-[10px]">
          <UserComment />
          <AIComment />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-4 px-6">
          <div className="self-stretch shadow-[4px_4px_4px_rgba(0,_0,_0,_0.5),_-4px_-4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-between py-4 px-8 border-[1px] border-solid border-silver-200">
            <input
              value={selectedText}
              onChange={handleChange}
              className="[border:none] [outline:none] font-light font-inter text-xs w-full bg-[transparent] relative leading-[18px] italic placeholder-darkgray-300 text-left"
              placeholder="質問をどうぞ"
              type="text"
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] relative h-[30px] bg-[url('/public/image-5@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
