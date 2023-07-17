import React, { useState, useRef, useCallback } from "react";

import UserData from "./steps/UserData";
import UserNewsSettings from "./steps/UserNewsSettings";
import StepperNavigation from "./StepperNavigation";
import StepperButtons from "./StepperButtons";

import { createUser } from "sdk";
export default () => {
  const steps = useRef([
    { id: 1, component: UserData, name: "step one" },
    { id: 2, component: UserNewsSettings, name: "step two" },
  ]);

  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    newsletter: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [validatedSteps, setValidatedSteps] = useState([]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }, []);

  const handlePrevious = useCallback(() => {
    setActiveStep((prevStep) => prevStep - 1);
  }, []);

  const validateStep = useCallback(
    (stepNumber) => {
      let isValid = true;
      const validationErrors = {};

      switch (stepNumber) {
        case 1:
          if (!formData.name.trim()) {
            validationErrors.name = "Please enter your name.";
            isValid = false;
          }
          if (!formData.age.trim()) {
            validationErrors.age = "Please enter your age.";
            isValid = false;
          }
          break;
        case 2:
          if (!formData.email.trim()) {
            validationErrors.email = "Please enter your email address.";
            isValid = false;
          }
          if (!formData.newsletter) {
            validationErrors.newsletter = "Please select a newsletter option.";
            isValid = false;
          }
          break;
        default:
          return false;
      }

      return { isValid, validationErrors };
    },
    [formData]
  );

  const handleSubmit = useCallback(async () => {
    const { isValid, validationErrors } = validateStep(activeStep);
    if (isValid) {
      if (activeStep === steps.current.length) {
        setIsLoading(true);
        await createUser(formData);
        setIsLoading(false);
        setValidatedSteps((prevSteps) => [...prevSteps, activeStep]);
      } else {
        setErrors({ ...errors, ...validationErrors });
        setActiveStep((prevStep) => prevStep + 1);
        setValidatedSteps((prevSteps) => [...prevSteps, activeStep]);
      }
    } else {
      setErrors({ ...errors, ...validationErrors });
    }
  }, [activeStep, formData, errors, validateStep]);

  const setCurrentStep = useCallback(
    (step) => {
      const stepToVerify = step.id === 1 ? step.id : step.id - 1;
      const { isValid } = validateStep(stepToVerify);

      if (isValid) {
        setActiveStep(step.id);
      }
    },
    [validateStep]
  );

  const StepComponent = steps.current[activeStep - 1].component;

  return (
    <div className="container mx-auto max-w-lg mt-8 p-6 bg-gray-100 rounded-lg">
      <StepperNavigation
        steps={steps}
        activeStep={activeStep}
        validatedSteps={validatedSteps}
        setCurrentStep={setCurrentStep}
      />
      <div>
        <StepComponent
          formData={formData}
          errors={errors}
          handleChange={handleChange}
        />
      </div>
      <StepperButtons
        handlePrevious={handlePrevious}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        activeStep={activeStep}
        totalLength={steps.current.length}
      />
    </div>
  );
};
