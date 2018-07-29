import * as React from "react";

import { Button, Form, Input, Select, StepContainer } from "../../components";
import { createUser } from "../../sdk";
import * as validation from "../../utils/validation";

interface IState {
  showIndex: number;
  formValues: {
    age: number;
    email: string;
    name: string;
    newsletter: "daily" | "weekly" | "monthly";
  };
  errors: {
    age?: boolean | string;
    email?: boolean | string;
    name?: boolean | string;
  };
  formNotChanged: boolean;
  submittedSuccessfully?: boolean;
  disableFormButton: boolean;
}

export class TwoStepForm extends React.Component<{}, IState> {
  state: IState = {
    disableFormButton: false,
    errors: { email: true, name: true },
    formNotChanged: true,
    formValues: {
      age: 18,
      email: "",
      name: "",
      newsletter: "daily"
    },
    showIndex: 1
  };

  onChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: validation[name] && validation[name](value)
      },
      formNotChanged: false,
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    });
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState(
      {
        disableFormButton: true
      },
      () =>
        createUser(this.state.formValues)
          .then(() => {
            this.setState({
              disableFormButton: false,
              submittedSuccessfully: true
            });
          })
          .catch(() => {
            this.setState({
              disableFormButton: false,
              submittedSuccessfully: false
            });
          })
    );
  };

  changeStep = (showIndex: number) => () => {
    this.setState({ showIndex });
  };

  render() {
    const disableSubmit =
      this.state.disableFormButton ||
      !!Object.keys(this.state.errors).find(
        key => this.state.errors[key] !== false
      );
    return (
      <Form
        title="Two Step Form"
        submittedSuccessfully={this.state.submittedSuccessfully}
        onSubmit={this.onSubmit}
      >
        <StepContainer hide={this.state.showIndex !== 1}>
          <Input
            value={this.state.formValues.name}
            type="text"
            name="name"
            error={this.state.errors.name}
            onChange={this.onChange}
          />
          <Input
            value={this.state.formValues.age}
            type="number"
            error={this.state.errors.age}
            name="age"
            onChange={this.onChange}
          />
          <Button
            className="btn red-background"
            label="next"
            onClick={this.changeStep(2)}
          />
        </StepContainer>
        <StepContainer hide={this.state.showIndex !== 2}>
          <Input
            type="email"
            error={this.state.errors.email}
            name="email"
            onChange={this.onChange}
          />
          <Select
            value={this.state.formValues.newsletter}
            name="newsletter"
            onChange={this.onChange}
            options={["daily", "weekly", "monthly"]}
          />
          <Button
            className="btn red-background"
            label="prev"
            onClick={this.changeStep(1)}
          />
          <Button
            className="btn green-background"
            label="submit"
            type="submit"
            disabled={disableSubmit}
          />
        </StepContainer>
      </Form>
    );
  }
}
