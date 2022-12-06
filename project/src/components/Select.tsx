import { forwardRef, SelectHTMLAttributes } from "react";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

export type Option = { name: string; value: string };

const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement> & {
    options: Option[];
    error?: string;
  }
>(({ options, error, style, ...props }, ref) => (
  <SelectContainer style={style}>
    <span>{props.name}:</span>
    <StyledSelect style={{ marginTop: "0.5rem" }} ref={ref} {...props}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.name}
        </option>
      ))}
    </StyledSelect>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </SelectContainer>
));

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  box-shadow: 0px 1px 2px gray;
  border-radius: 0.5rem;
`;

const SelectContainer = styled.div`
  width: 100%;
`;

export default Select;
