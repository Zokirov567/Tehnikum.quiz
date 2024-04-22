import { EmojiOption } from "../components/EmojiOption";
import { ProgressBar } from "../components/ProgressBar";
import { Heading } from "../components/Typography/Heading";
import { AppButton } from "../components/UI/AppButton";

const optionData = [
  {
    optionText: "Веселый",
    optionImg: "./img/laugh.png",
    id: "variant-1",
    altText: "laugh",
  },
  {
    optionText: "Красивый",
    optionImg: "./img/hearts.png",
    id: "variant-2",
    altText: "hearts",
  },
  {
    optionText: "Строгий",
    optionImg: "./img/smirk.png",
    id: "variant-3",
    altText: "smirk",
  },
  {
    optionText: "Пугливый",
    optionImg: "./img/fright.png",
    id: "variant-4",
    altText: "fright",
  },
];

const StepThree = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar />

          <div className="question">
            <Heading headingText="Какой вы?" headingType="h2" />
            <ul className="emoji-variants">
              {optionData &&
                optionData.map((elem) => (
                  <EmojiOption
                    optionText={elem.optionText}
                    optionImg={elem.optionImg}
                    id={elem.id}
                    altText={elem.altText}
                  />
                ))}
            </ul>
            <AppButton ButtonText="Далее" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
