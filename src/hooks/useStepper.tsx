import { useContext } from "react";
import { StepperContext } from "../store/context/stepperContext";

const useStepper = () => {
  const stepper = useContext(StepperContext);
  return stepper;
};

export default useStepper;
