import { FunctionComponent } from "react";

const AIComment: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-2.5 pb-0 pr-40 pl-[120px] gap-[10px] text-left text-xs text-black font-inter">
      <img
        className="w-[31px] relative rounded-2xs h-[31px] object-cover"
        alt=""
        src="/202011070001493w500-0-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <i className="self-stretch relative leading-[18px] font-light">
          <p className="m-0">＃あなたの反省に対して</p>
          <p className="m-0">
            即答できなかった質問については、しっかりとした準備が必要ですね。その一方で、全てを完璧に覚えるのは不可能です。知識のギャップを認め、後で正確な情報を提供するという姿勢も信頼関係構築につながります。競合他社の製品については、彼らの強みだけでなく、弱点についても理解し、そこをどのように弊社の製品が補うかをクライアントに示せるようになることが重要です。
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">＃あなたにない視点</p>
          <p className="m-0">
            商談での「良かったこと」にフォーカスすることは重要ですが、クライアントが何に最も関心を持っていたのか、どのポイントで最も熱心に質問していたのかを再検討すると良いでしょう。これは、彼らの本当の痛点や隠れたニーズを理解する手がかりになります。また、顧客が他社製品に対してどのような認識を持っているかも理解することで、対策を講じる際に有益な情報となります。
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">＃考えるべきポイント</p>
          <p className="m-0">
            製品のデモが良いフィードバックを得られたとのことですが、デモのどの部分がクライアントの注意を引いたのかを分析することが次回の商談に役立ちます。また、自分の製品知識の不足を感じた部分は具体的に何か、それを補うためにどの資料を読むべきか、誰に相談すべきかをリストアップしましょう。さらに、次回は質問に即答できなかった点も改善するため、類似の質問への対応策を用意しておくと安心です。
          </p>
        </i>
      </div>
    </div>
  );
};

export default AIComment;
