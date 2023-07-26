export type Step = {
    title: string;
    content: React.ReactNode;
  };
  
  export type StepperProps = {
    steps: Step[];
  };