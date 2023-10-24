import clsx from "clsx";
import { IStepperItemProps } from "./Stepper.types";

export const StepItem = ({ title, step, isActive }: IStepperItemProps) => {
  return (
    <div
      className={clsx(
        "flex gap-4 items-center border-b-4 border-neutral-200 py-4 flex-1",
        {
          "border-primary-100": isActive,
        }
      )}
    >
      <div
        className={clsx(
          "rounded-full border-2  flex items-center justify-center w-10 h-10",
          {
            "border-primary-500 bg-white text-primary-500": isActive,
            "border-stroke-12 text-neutral-500": !isActive,
          }
        )}
      >
        {step}
      </div>
      <div className="text-neutral-900 font-medium text-base">{title}</div>
    </div>
  );
};
