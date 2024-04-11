import { FunctionComponent } from "react";
import Header from "../components/Header";
import Leftbar from "../components/Leftbar";
import Center from "../components/Center";
import Rightbar from "../components/Rightbar";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden  flex flex-col items-start justify-start">
      <Header />
      <div className="self-stretch h-[936px] flex flex-row items-start justify-between">
        <Leftbar />
        <Center />
        <Rightbar />
      </div>
    </div>
  );
};

export default Desktop;
