import Layout from "../components/Layout";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Select from "../components/Select";
import { newsletterOptions } from "../constants";
import Card from "../components/Card";

type Inputs = { email: string; newsletter: "daily" | "weekly" | "monthly" };

const Step2 = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <Layout>
      <Card title="Register Form">
        <Form onSubmit={handleSubmit((data) => console.log(data))}>
          <Input
            {...register("email", {
              required: { value: true, message: "This is required!" },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email is invalid!",
              },
            })}
            type="email"
            error={errors.email?.message}
          />
          <Select
            {...register("newsletter", {
              required: { value: true, message: "This is required!" },
            })}
            name="newsletter"
            style={{ marginTop: "1rem" }}
            options={newsletterOptions}
            error={errors.newsletter?.message}
          />
          <ButtonContainer>
            <Button onClick={() => navigate("/")}>Previous</Button>
            <Button type="submit">Submit</Button>
          </ButtonContainer>
        </Form>
      </Card>
    </Layout>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 3rem;
  justify-content: space-between;
  width: 100%;
`;

export default Step2;
