import { FunctionComponent, useState } from "react";
import Header from "../components/Header";
import Leftbar from "../components/Leftbar";
import Center from "../components/Center";
import Rightbar from "../components/Rightbar";

const Desktop: FunctionComponent = () => {
  const [selectedText, setSelectedText] = useState("");

  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start">
      <Header />
      <div className="self-stretch flex flex-row items-start justify-between">
        <Leftbar setSelectedText={setSelectedText} />
        <Center selectedText={selectedText} setSelectedText={setSelectedText} />
        <Rightbar />
      </div>
    </div>
  );
};

export default Desktop;
