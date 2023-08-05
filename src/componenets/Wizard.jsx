import React, { useState } from "react";

const Wizard = ({ steps, title }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [request, setRequest] = useState({
    name: "",
    age: null,
    email: "",
    newsletter: "daily",
  });
  const totalSteps = steps.length;
  const currentStepData = steps[currentStep];

  const goToNextStep = () => {
    if (currentStep < totalSteps - 1) {
      const validationError =
        currentStepData.validate && currentStepData.validate(request);
      if (validationError) {
        alert(validationError);
        return;
      }
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const StepComponent = currentStepData.component;

  return (
    <div className="container mx-auto max-w-2xl mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <div className="flex items-center mb-4">
        {steps.map((step, index) => (
          <div key={index}>
            {index > 0 && <span className="w-px mx-1 text-gray-400">/</span>}
            <span
              className={`text-xs font-medium ${
                index === currentStep ? "text-blue-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
      <StepComponent
        request={request}
        setRequest={setRequest}
        goToNextStep={goToNextStep}
        goToPreviousStep={goToPreviousStep}
      />
      <div className="mt-8 flex justify-end gap-1">
        {currentStep > 0 && (
          <button onClick={goToPreviousStep} className="button_secondary">
            Previous
          </button>
        )}
        <button onClick={goToNextStep} className="button_primary">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Wizard;
