export interface IStep {
  title: string;
  id: string;
  step: number;
}

export interface IStepperItemProps extends IStep {
  isActive?: boolean;
}

export interface IStepperProps {
  steps: Array<IStep>;
  activeStep: IStepperItemProps["id"];
}
