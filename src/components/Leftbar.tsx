import { FunctionComponent } from "react";

const Leftbar: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-lavender flex flex-col items-start justify-start h-[95vh] py-0 px-2 text-left text-lg text-gray-100 font-inter border-l-[1px] border-solid sticky top-0 border-lightgray-200 md:hidden">
      <div className="flex flex-row items-start justify-center py-6 mx-auto gap-[88px]">
        <div className="flex flex-row items-start justify-center">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs font-extrabold font-inter text-mediumblue text-left inline-block">
            テンプレート
          </button>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs inline-block italic font-light font-inter text-black text-left">
          参照データ
        </button>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-silver-100" />
      <div className="self-stretch flex flex-col items-start justify-start pt-8 pb-0 pr-3 pl-6 gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-[16px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[10px] relative h-[21px]  bg-[url('/public/image-3@3x.png')] bg-cover bg-no-repeat bg-[top]" />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg font-inter text-black text-left inline-block">
                営業部
              </button>
            </div>
            <div className="relative">5件</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-8 gap-[16px] text-base text-black">
            <div className="self-stretch relative">
              ・顧客の質問への返答生成
            </div>
            <div className="self-stretch relative">・競合製品との比較</div>
            <div className="self-stretch relative">
              ・プレゼンテーション概要の作成
            </div>
            <div className="self-stretch relative">・FAQセクションの更新</div>
            <div className="self-stretch relative">・販売戦略の提案</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[10px] relative h-[21px] bg-[url('/public/image-31@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg font-inter text-black text-left inline-block">
              マーケティング部
            </button>
          </div>
          <div className="relative">3件</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[10px] relative h-[21px] bg-[url('/public/image-31@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg font-inter text-black text-left inline-block">
              情報システム部
            </button>
          </div>
          <div className="relative">1件</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[10px] relative h-[21px] bg-[url('/public/image-31@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg font-inter text-black text-left inline-block">
              経理部
            </button>
          </div>
          <div className="relative">1件</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[10px] relative h-[21px] bg-[url('/public/image-31@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg font-inter text-black text-left inline-block">
              法務部
            </button>
          </div>
          <div className="relative">4件</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[10px] relative h-[21px] bg-[url('/public/image-31@3x.png')] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg font-inter text-black text-left inline-block">
              人事部
            </button>
          </div>
          <div className="relative">6件</div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
