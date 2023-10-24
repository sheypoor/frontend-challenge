import { FormEvent, useState } from "react";
import Layout from "components/Layout/Layout";
import { Stepper } from "components/Stepper";
import { STEPS_USER_FORM } from "constants/createUserForm";
import ContactInfoForm from "./components/ContactInfoForm";
import SuccessContent from "./components/SuccessContent";
import UserInfoForm from "./components/UserInfoForm";
import { useCreateUser } from "hooks/useCreateUser";
import { StpesEnum } from "./CreateUser.types";

const CreateUserPage = () => {
  const [currentStep, setCurrentStep] = useState<StpesEnum>(
    StpesEnum.USER_INFO
  );
  const {
    isLoading,
    errors,
    userDetails,
    handleInputChange,
    submitUser,
    isSuccess,
  } = useCreateUser();

  const handleNextStep = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentStep === StpesEnum.CONTACT_INFO) {
      submitUser();
    } else setCurrentStep(StpesEnum.CONTACT_INFO);
  };

  const handlePrevStep = () => {
    setCurrentStep(StpesEnum.USER_INFO);
  };

  return (
    <Layout>
      {isSuccess ? (
        <SuccessContent name={userDetails.name} />
      ) : (
        <div className="py-4">
          <Stepper steps={STEPS_USER_FORM} activeStep={currentStep} />
          {currentStep === StpesEnum.USER_INFO && (
            <UserInfoForm
              onSubmit={handleNextStep}
              userDetails={userDetails}
              onChange={handleInputChange}
            />
          )}
          {currentStep === StpesEnum.CONTACT_INFO && (
            <ContactInfoForm
              onChange={handleInputChange}
              onSubmit={handleNextStep}
              onGoBack={handlePrevStep}
              userDetails={userDetails}
              isLoading={isLoading}
              error={errors.email}
            />
          )}
        </div>
      )}
    </Layout>
  );
};

export default CreateUserPage;
