import { useEffect, useState } from "react";
import { Heading } from "../components/Typography/Heading";
import { AppButton } from "../components/UI/AppButton";
import { AppInput } from "../components/UI/AppInput";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  
  const [answerValue, setAnswerValue] = useState("")
  const [answerError, setAnswerError] = useState(false)
  
useEffect(() => {
  if(!answerValue) {
    setAnswerError(true)
  } else {
    setAnswerError(false)
  }
}, [answerValue, answerError])

  const navigate = useNavigate()

  const submitHandler = () => {
    navigate("/step-two")
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading
              headingText={"1. Где вы узнали про нашу школу?"}
              headingType={"h1"}
            />
            <form onSubmit={submitHandler}>
            <AppInput
              inputLabel={""}
              id={"answer"}
              inputType={"text"}
              inputPlaceholder={"Ваш ответ"}
              errorMessage={"Введите ваш отве"} onChange={function (e: any): void {
                throw new Error("Function not implemented.");
              } } hasError={false}/>
            <AppButton isDisabled={false} ButtonText="Далее" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;