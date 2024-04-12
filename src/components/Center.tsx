import { FunctionComponent, useRef } from "react";
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
  const hiddenInput = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-auto self-stretch flex-1 flex flex-col items-start justify-between text-left text-base text-black font-inter">
      <div className="self-stretch flex-1 flex flex-col items-center justify-end gap-[10px] text-xs">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-16 gap-[10px]">
          <UserComment />
          <AIComment />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-4 px-6">
          <div className="relative self-stretch shadow-[4px_4px_4px_rgba(0,_0,_0,_0.5),_-4px_-4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-between py-4 border-[1px] border-solid border-silver-200">
            <div
              className="invisible min-h-[3em] overflow-x-hidden whitespace-pre-wrap break-words p-3"
              aria-hidden={true}
              ref={hiddenInput}
            ></div>
            <textarea
              className="[border:none] [outline:none] font-light font-inter text-xs w-full h-full resize-none bg-[transparent] relative leading-[18px] italic placeholder-darkgray-300 text-left"
              placeholder="質問をどうぞ"
              onChange={(e) => {
                if (hiddenInput.current)
                  hiddenInput.current.textContent = e.target.value + "\u200b";
              }}
            ></textarea>
            <button className="absolute button-1.5 right-2 cursor-pointer [border:none] p-0 bg-[transparent] w-[30px]  h-[30px] bg-[url('/public/image-5@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
