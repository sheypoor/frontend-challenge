import { ReactNode } from "react";
import styled from "styled-components";

type CardProps = { children: ReactNode; title: string };

const Card = ({ title, children }: CardProps) => {
  return (
    <StyledDiv>
      <Title>{title}</Title>
      <ContentContainer>{children}</ContentContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background: #d6e4e5;
  padding: 5rem 5rem;
  min-width: 30%;
  border-radius: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

const ContentContainer = styled.div`
  margin-top: 3rem;
`;

export default Card;
