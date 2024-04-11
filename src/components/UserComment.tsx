import { FunctionComponent } from "react";

const UserComment: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-snow flex flex-row items-start justify-start pt-8 pb-12 pr-40 pl-[120px] gap-[10px] text-left text-xs text-black font-inter">
      <img
        className="w-[31px] relative rounded-2xs h-[31px] object-cover"
        alt=""
        src="/202011070001493w500-0-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
        <i className="self-stretch relative leading-[18px] font-light">
          <p className="m-0">＃今日したこと</p>
          <p className="m-0">
            中小企業の部長と二回目の商談を行いました。前回のフィードバックをもとに、弊社のソリューションが彼らの要件にどのようにフィットするかについて詳細に説明しました。また、彼らが直面している問題点に対する具体的な解決策と、それによる期待される成果について話を進めました。
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">＃良かったこと</p>
          <p className="m-0">
            部長は提案されたソリューションに興味を持ってくれて、具体的な質問をしてくれました。これにより、ニーズに合ったカスタマイズの可能性を探ることができました。また、製品のデモを見てもらう機会を得られたことも大きな進展です。
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">＃課題</p>
          <p className="m-0">
            部長からの質問の一部に即座に答えられなかったことが課題です。また、競合他社の製品に対する知識が不足していたため、比較検討の際に十分な情報を提供できませんでした。
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">＃次回の目標</p>
          <p className="m-0">
            次回は、より詳細な競合分析を行い、私たちのソリューションがなぜ優れているのかを明確に伝えられるように準備します。さらに、質問に即座に答えられるよう、製品知識を深めるための勉強を続けます。部長との次のアポイントメントでは、クロージングに向けた確実なステップを踏むことを目指します。
          </p>
        </i>
        <i className="relative font-light text-gray-200">2024’03’05 12:00</i>
      </div>
    </div>
  );
};

export default UserComment;
