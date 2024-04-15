import { FunctionComponent, useState, useEffect } from "react";
import UserComment from "./UserComment";
import AIComment from "./AIComment";
import TextareaAutosize from "react-textarea-autosize";
import Leftbar from "./Leftbar";
import { Drawer, useMediaQuery } from "@mui/material";

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
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedText(event.target.value);
  };

  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-between h-[88vh] overflow-auto text-left text-base text-black font-inter">
      <div className="self-stretch flex-1 flex flex-col items-center justify-end gap-[10px] text-xs">
        <div
          className="fixed left-0 top-1/2 z-40 "
          style={{
            transform: "translateY(-50%) rotate(0deg) translateZ(0px)",
          }}
        >
          <button
            className="bg-transparent"
            onClick={() => setIsLeftbarOpen(true)}
          >
            <span className="" data-state="closed">
              <div className="flex h-[72px] w-8 items-center justify-center ">
                <div className="flex h-6 w-6 flex-col items-center ">
                  <div
                    className="h-3 w-1 rounded-full bg-gray-100"
                    style={{
                      transform:
                        "translateY(0.15rem) rotate(0deg) translateZ(0px)",
                    }}
                  ></div>
                  <div
                    className="h-3 w-1 rounded-full bg-gray-100"
                    style={{
                      transform:
                        "translateY(-0.15rem) rotate(0deg) translateZ(0px)",
                    }}
                  ></div>
                </div>
              </div>
              <span
                style={{
                  position: "absolute",
                  border: "0px",
                  width: "1px",
                  height: "1px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal",
                }}
              >
                Close sidebar
              </span>
            </span>
          </button>
        </div>
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
      <Drawer
        anchor="left"
        open={isLeftbarOpen}
        onClose={() => setIsLeftbarOpen(false)}
      >
        <Leftbar
          setSelectedText={setSelectedText}
          setIsLeftbarOpen={setIsLeftbarOpen}
        />
      </Drawer>
    </div>
  );
};

export default Center;
