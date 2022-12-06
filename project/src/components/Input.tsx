import { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

type InputAttrs = InputHTMLAttributes<HTMLInputElement>;
type InputProps = InputAttrs & {
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, style, ...props }, ref) => {
    return (
      <>
        <InputContainer style={style}>
          <span>{props.name}:</span>
          <StyledInput ref={ref} style={{ marginTop: "0.5rem" }} {...props} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
      </>
    );
  }
);

const StyledInput = styled.input<InputAttrs>`
  padding: 0.5rem 1rem;
  border: none;
  box-shadow: 0px 1px 2px gray;
  border-radius: 0.5rem;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Input;
