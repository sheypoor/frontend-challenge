export default ({
  steps,
  activeStep,
  validatedSteps,
  setCurrentStep,
  isStepValid,
}) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-4">
        {steps.current.map((step) => (
          <button
            key={step.id}
            className={`stepper-step relative rounded-full px-4 py-2 ${
              activeStep === step.id
                ? "bg-blue-500 text-white"
                : validatedSteps.includes(step.id)
                ? "bg-green-200 text-gray-600"
                : "bg-gray-200"
            } ${
              step.id !== 1 && !isStepValid(step)?.isValid
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => setCurrentStep(step)}
          >
            {step.name}
            {step.id !== 1 && (
              <span className="stepper-line bg-gray-300"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
