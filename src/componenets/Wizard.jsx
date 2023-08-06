import React, { useState } from "react";
import { createUser } from "sdk";
import Spinner from "./ui/Spinner";
import { useNavigate } from "react-router-dom";

const Wizard = ({ steps, title }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState({
    name: "",
    age: "",
    email: "",
    newsletter: "daily",
  });
  const navigate = useNavigate();
  const totalSteps = steps.length;
  const currentStepData = steps[currentStep];

  const goToNextStep = async () => {
    const validationError =
      currentStepData.validate && currentStepData.validate(request);
    if (validationError) {
      alert(validationError);
      return;
    }
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      try {
        setIsLoading(true);
        const response = await createUser(request);
        if (response?.user) {
          alert(
            "Congratulations! The user has been created successfully. You will now be redirected to the dashboard."
          );
          navigate("/");
        } else {
          throw Error("Opps! Something went wrong. Please try again.");
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const goToDash = () => {
    navigate("/");
  };

  const StepComponent = currentStepData.component;

  return (
    <div className="container mx-auto max-w-2xl mt-20 p-6 bg-white shadow-md rounded-lg">
      <button onClick={goToDash}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-2 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <div className="flex items-center mb-4">
        {steps.map((step, index) => (
          <div key={index}>
            {index > 0 && <span className="w-px mx-1 text-gray-400">/</span>}
            <span
              className={`text-xs font-medium ${
                index === currentStep ? "text-sky-800" : "text-gray-400"
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
        <button
          onClick={goToNextStep}
          disabled={isLoading}
          className="button_primary"
        >
          {isLoading && <Spinner />}
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Wizard;
