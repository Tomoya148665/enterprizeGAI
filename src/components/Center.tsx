import { FunctionComponent, useState, useEffect, KeyboardEvent } from "react";
import UserComment from "./UserComment";
import AIComment from "./AIComment";
import TextareaAutosize from "react-textarea-autosize";
import Leftbar from "./Leftbar";
import { Drawer, useMediaQuery } from "@mui/material";
import { buttonTexts } from "../constants/buttonText";

interface CenterProps {
  selectedText: string;
  setSelectedText: (text: string) => void;
  setIsLeftbarOpen: (isOpen: boolean) => void;
  isLeftbarOpen: boolean;
}

const Center: React.FunctionComponent<CenterProps> = ({
  selectedText,
  setSelectedText,
  setIsLeftbarOpen,
  isLeftbarOpen,
}) => {
  const [comments, setComments] = useState<
    Array<{ type: string; text: string }>
  >([]);
  const [date, setDate] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedText(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedText.trim()) return;
    const newComment = {
      type: "user",
      text: selectedText,
    };
    const aiResponse = {
      type: "ai",
      text: "これはAIの自動生成された応答です。",
    };
    setComments((comments) => [...comments, newComment, aiResponse]);
    setSelectedText("");
    const date = new Date();
    let formattedDate = date.toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    formattedDate = formattedDate.replace(/\//g, "'");
    setDate(formattedDate);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-between h-[88vh] overflow-auto text-left text-base text-black font-inter">
      <div className="self-stretch flex-1 flex flex-col items-center justify-end gap-[10px] text-xs">
        <div className="self-stretch overflow-hidden flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-16 gap-[10px]">
          <UserComment
            text={buttonTexts.firstUserComment}
            date={"2024’03’05 12:00"}
          />
          <AIComment text={buttonTexts.firstAIComment} />
          {comments.map((comment, index) =>
            comment.type === "user" ? (
              <UserComment key={index} text={comment.text} date={date} />
            ) : (
              <AIComment key={index} text={comment.text} />
            )
          )}
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-1  sticky bottom-0 h-20 pb-4 px-6 bg-white">
          <div className="absolute bottom-3 w-[80%] left-[50%] translate-x-[-50%]  self-stretch shadow-[4px_4px_4px_rgba(0,_0,_0,_0.5),_-4px_-4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-between bg-white py-4 px-8 border-[1px] border-solid border-silver-200">
            <TextareaAutosize
              value={selectedText}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="[border:none] [outline:none] font-light font-inter text-xs w-full relative leading-[18px] italic placeholder-darkgray-300 text-left resize-none"
              placeholder="質問をどうぞ"
              maxRows={10}
            />
            <button
              className="cursor-pointer [border:none] p-0 w-[30px] relative h-[30px] bg-[url('/public/image-5@3x.png')] bg-white bg-cover bg-no-repeat bg-[top]"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
