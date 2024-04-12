import { FunctionComponent } from "react";

const Rightbar: FunctionComponent = () => {
  return (
    <div className="self-start flex flex-col items-start justify-between py-2.5 px-0 h-[95vh] text-left text-mini text-black font-inter border-l-[0.8px] sticky top-0 border-solid border-darkgray-200 md:hidden">
      <div className="flex flex-col items-start justify-start py-0 px-[18px] gap-[20px]">
        <button className="cursor-pointer [border:none] py-3 px-12 bg-black self-stretch rounded-4xs flex flex-col items-center justify-center">
          <div className="relative text-lg font-inter text-white whitespace-pre-wrap text-left">
            ＋ 新しい会話
          </div>
        </button>
        <div className="flex flex-row items-center justify-center gap-[7.5px]">
          <img
            className="w-[21px] relative h-5 object-contain"
            alt=""
            src="/vector.png"
          />
          <div className="relative">商談反省</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[7.5px]">
          <img
            className="w-[21px] relative h-5 object-contain"
            alt=""
            src="/vector2.png"
          />
          <div className="relative">リード管理</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[7.5px]">
          <img
            className="w-[21px] relative h-5 object-contain"
            alt=""
            src="/vector2.png"
          />
          <div className="relative">ロールプレイ復習</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[7.5px]">
          <img
            className="w-[21px] relative h-5 object-contain"
            alt=""
            src="/vector2.png"
          />
          <div className="relative">スクリプト生成</div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[7.5px]">
          <img
            className="w-[21px] relative h-5 object-contain"
            alt=""
            src="/vector2.png"
          />
          <div className="relative">顧客データ分析</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[7.5px]">
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-darkgray-100" />
        <div className="flex flex-col items-start justify-start pt-4 px-[18px] pb-2 gap-[8px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[7.5px]">
            <img
              className="w-5 relative h-[22px] object-cover"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="relative text-lg font-light font-inter text-black text-left">
              会話履歴をすべてクリア
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[7.5px]">
            <img
              className="w-[15px] relative h-[21px] object-cover"
              alt=""
              src="/image-9@2x.png"
            />
            <div className="relative text-lg font-inter text-black text-left">
              管理画面
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[7.5px]">
            <img
              className="w-[15px] relative h-4 object-contain"
              alt=""
              src="/vector.svg"
            />
            <div className="relative text-lg font-inter text-black text-left">
              ログアウト
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
