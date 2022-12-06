import Layout from "../components/Layout";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

type Inputs = { name: string; age: number };

const Step1 = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  return (
    <Layout>
      <Card title="Register Form">
        <Form
          onSubmit={handleSubmit((data) => {
            console.log("first-step", data);
            navigate("/step-two");
          })}
        >
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
          <Button type="submit" style={{ marginTop: "3rem" }}>
            next
          </Button>
        </Form>
      </Card>
    </Layout>
  );
};

export default Step1;
