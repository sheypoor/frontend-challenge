import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const steps = ["Information", "Subscribtion"];

export default function Steps() {
  const [currentStep, setCurrentStep] = useState(0);

  const [newsletterPeriod, setNewsletterPeriod] = useState();

  const handleReview = () => {
    setCurrentStep(0);
  };

  const handleSubmitInformation = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubscribe = () => {};
  const handleNewsletterPeriodChange = (selectValue) => {
    setNewsletterPeriod(selectValue);
  };
  const getStepComponent = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return (
          <StepTwo
            handleNewsletterPeriodChange={(selectValue) =>
              handleNewsletterPeriodChange(selectValue)
            }
            newsletterPeriod={newsletterPeriod}
          />
        );
      default:
        return "Error";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={currentStep}
        alternativeLabel
      >
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step
              key={label}
              {...stepProps}
            >
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <>
        <Typography sx={{ mt: 2, mb: 1 }}>
          {getStepComponent(currentStep)}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          {currentStep > 0 && (
            <Button
              color='inherit'
              disabled={currentStep === 0}
              onClick={handleReview}
              sx={{ mr: 1 }}
            >
              Review Info
            </Button>
          )}
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            variant='contained'
            onClick={
              currentStep === 0 ? handleSubmitInformation : handleSubscribe
            }
          >
            {currentStep === steps.length - 1 ? "Subscribe" : "Next"}
          </Button>
        </Box>
      </>
    </Box>
  );
}
