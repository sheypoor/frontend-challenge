import Layout from "../components/Layout";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { User } from "sdk";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Message from "../components/Message";

const Step1 = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useFormContext<User>();

  return (
    <Layout>
      <Card title="Register Form">
        <Form onSubmit={handleSubmit(() => navigate("/step2"))}>
          <Input
            placeholder="name"
            type="text"
            error={errors.name?.message}
            {...register("name", {
              required: { value: true, message: "This is required!" },
            })}
          />
          <Input
            placeholder="age"
            type="number"
            style={{ marginTop: "1rem" }}
            {...register("age", {
              required: { value: true, message: "This is required!" },
            })}
            error={errors.age?.message}
          />
          <Button
            disabled={!isValid}
            type="submit"
            style={{ marginTop: "3rem" }}
          >
            next
          </Button>
        </Form>
      </Card>
      {location.state?.isSubmitted && (
        <Message style={{ marginTop: "1rem" }} type="SUCCESS">
          Your info submitted successfully
        </Message>
      )}
    </Layout>
  );
};

export default Step1;
