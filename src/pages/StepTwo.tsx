import { Heading,  } from "../components/Typography/Heading";
import { Option } from "../components/Option";
import { AppButton } from "../components/UI/AppButton";
import { ProgressBar } from "../components/ProgressBar";
const OptionData = [
  {
    labelText: "Frontend",
    id: "variant-1"
  },
  {
    labelText: "Python",
    id: "variant-2"
  },
  {
    labelText: "UI-UX",
    id: "variant-3"
  },
  {
    labelText: "Design",
    id: "variant-4"
  }
]


const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar/>

          <div className="question">
            <Heading headingType="h2" headingText={"На какой курс вы хотите пойти?"}/>
            {/* <h2>2. На какой курс вы хотите пойти?</h2> */}
            <ul className="variants">
              {OptionData && OptionData.map((elem) =>(
                <Option labelText={elem.labelText} inputType={"radio"} id={elem.id} />
              ))}
            </ul>
            <AppButton ButtonText="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;