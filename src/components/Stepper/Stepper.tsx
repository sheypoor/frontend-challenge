import { StepItem } from "./StepItem";
import { IStepperProps } from "./Stepper.types";

export const Stepper = ({ steps, activeStep }: IStepperProps) => {
  return (
    <div className="w-full flex">
      {steps.map((step, index) => {
        return (
          <StepItem
            key={step.id}
            title={step.title}
            id={step.id}
            isActive={activeStep === step.id}
            step={index + 1}
          />
        );
      })}
    </div>
  );
};
