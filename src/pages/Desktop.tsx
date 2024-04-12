import { FunctionComponent, useState } from "react";
import Header from "../components/Header";
import Leftbar from "../components/Leftbar";
import Center from "../components/Center";
import Rightbar from "../components/Rightbar";
import Subheader from "../components/Subheader";

const Desktop: FunctionComponent = () => {
  const [selectedText, setSelectedText] = useState("");

  return (
    <div className="overflow-hidden w-full relative bg-white flex flex-col items-start justify-start">
      <Header />
      <div className="self-stretch flex flex-row items-start justify-between">
        <Leftbar setSelectedText={setSelectedText} />
        <div className="self-stretch grow flex-col">
          <Subheader />
          <Center
            selectedText={selectedText}
            setSelectedText={setSelectedText}
          />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Desktop;
