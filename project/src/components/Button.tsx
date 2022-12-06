import styled from "styled-components";

const Button = styled.button`
  background: #497174;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  transition: all 200ms;

  &:hover {
    box-shadow: 1px 1px 10px gray;
  }

  &:disabled {
    background: gray;
  }
`;

export default Button;
