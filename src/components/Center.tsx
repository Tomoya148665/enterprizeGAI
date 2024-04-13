import { FunctionComponent } from "react";
import UserComment from "./UserComment";
import AIComment from "./AIComment";
import TextareaAutosize from "react-textarea-autosize";

interface CenterProps {
  selectedText: string;
  setSelectedText: (text: string) => void;
}

const Center: React.FunctionComponent<CenterProps> = ({
  selectedText,
  setSelectedText,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedText(event.target.value);
  };

  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-between h-[88vh] overflow-auto text-left text-base text-black font-inter">
      <div className="self-stretch flex-1 flex flex-col items-center justify-end gap-[10px] text-xs">
        <div className="self-stretch overflow-hidden flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-16 gap-[10px]">
          <UserComment />
          <AIComment />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-1  sticky bottom-0 h-20 pb-4 px-6 bg-white">
          <div className="self-stretch shadow-[4px_4px_4px_rgba(0,_0,_0,_0.5),_-4px_-4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-between bg-white py-4 px-8 border-[1px] border-solid border-silver-200">
            <TextareaAutosize
              value={selectedText}
              onChange={handleChange}
              className="[border:none] [outline:none] font-light font-inter text-xs w-full relative leading-[18px] italic placeholder-darkgray-300 text-left resize-none"
              placeholder="質問をどうぞ"
              maxRows={10}
            />
            <button className="cursor-pointer [border:none] p-0 w-[30px] relative h-[30px] bg-[url('/public/image-5@3x.png')] bg-white bg-cover bg-no-repeat bg-[top]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
