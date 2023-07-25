import { StepperProvider } from "../../store/context/stepperContext";
import { useState } from "react";
import { StepperProps } from "./model";

const Stepper = (props: StepperProps) => {
  const { steps } = props;
  const [currentStep, setCurrentStep] = useState<number>(0);

  const next = (): void => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = (): void => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNavClick = (index: number) => {
    if (index <= currentStep) setCurrentStep(index);
  };

  const handleSetStep = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <StepperProvider
      next={next}
      prev={prev}
      setStep={handleSetStep}
    >
      <h2 className="text-center">Sing Up</h2>
      <div className="stepper">
        <ul className="stepper__nav">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`stepper__nav--item ${
                index <= currentStep ? "active" : ""
              } ${index < currentStep ? "complete" : ""}`}
              onClick={() => handleNavClick(index)}
            >
              <span>{index + 1}</span>
              <p>{step.title}</p>
            </li>
          ))}
        </ul>
          
        <div className="stepper__content">{steps[currentStep].content}</div>
      </div>
    </StepperProvider>
  );
};

export default Stepper;
