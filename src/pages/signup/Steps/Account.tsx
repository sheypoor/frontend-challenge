import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Form,
  Label,
  Input,
  FormFeedback,
  Row,
  Col,
  Button,
  Spinner,
} from "reactstrap";
import useStepper from "../../../hooks/useStepper";
import { EMAIL_REGEX } from "../../../constants";
import Select from "react-select";
import { createUser } from "../../../sdk";

const newLetters = [
  { value: "daily", label: "daily" },
  { value: "weekly", label: "weekly" },
  { value: "monthly", label: "monthly" },
];

const AccountStep = () => {
  const stepper = useStepper();
  const [isLoading, setIsLoading] = useState<{
    request: boolean;
    finished: boolean;
  }>({
    request: false,
    finished: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data: object) => {
    stepper.setValue(data);
    setIsLoading((prevState) => ({ ...prevState, request: true }));
    createUser(data).then((res) => {
      setIsLoading((prevState) => ({ ...prevState, request: false }));
      setIsLoading((prevState) => ({ ...prevState, finished: true }));
      stepper.next();
    });
  };
  const handleResetClick = () => {
    stepper.resetValues();
    stepper.setStep(0);
  };

  const handlePrevClick = () => {
    stepper.prev();
  };

  return isLoading.finished === true ? (
    <div className="py-4">
      <Row className="justify-content-center">
        <h3 className="text-center">
          Your subscription to the newsletter has been successfully completed
        </h3>
      </Row>
      <Row className="justify-content-center">
        <Col xs={11} lg={5}>
          <div className="text-center">
            <Button
              className="w-100"
              type="button"
              outline
              color="primary"
              onClick={handleResetClick}
            >
              Create New Account
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <Form className="py-4" onSubmit={handleSubmit(handleSubmitForm)}>
      <Row className="justify-content-center pb-5">
        <Col xs={11} lg={6}>
          <div className="">
            <Label className="" for="name">
              Email
            </Label>
            <Controller
              name="email"
              rules={{ required: true, pattern: EMAIL_REGEX }}
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  id="email"
                  placeholder="Must include @ and ."
                  autoFocus
                  invalid={errors.email && true}
                  {...field}
                />
              )}
            />
            {errors.email ? (
              <FormFeedback>Email is required</FormFeedback>
            ) : null}
          </div>

          <div className="mt-3">
            <Label className="" for="age">
              NewsLetter
            </Label>
            <Controller
              name="newsletter"
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, value, name, ref } }) => (
                <Select
                  id="newsletter"
                  options={newLetters}
                  value={newLetters.find((c) => c.value === value)}
                  name={name}
                  onChange={(selectedOption) => {
                    onChange(selectedOption?.value);
                  }}
                />
              )}
            />
            {errors.newsletter ? (
              <FormFeedback>Age is required</FormFeedback>
            ) : null}
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={11} lg={6}>
          <div className="d-flex align-items-center justify-content-center pb-3 pt-3">
            {isLoading.request ? (
              <div className="">
                <Spinner color="primary" />
              </div>
            ) : (
              <>
                <Button
                  className="me-2 w-50"
                  outline
                  type="button"
                  color="secondary"
                  onClick={handlePrevClick}
                >
                  Prev
                </Button>
                <Button className="w-100" type="submit" color="primary">
                  Done
                </Button>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default AccountStep;
