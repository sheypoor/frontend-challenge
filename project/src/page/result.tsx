import Layout from "../components/Layout";
import { useFormContext } from "react-hook-form";
import { User } from "sdk";
import Card from "../components/Card";
import styled from "styled-components";

const Result = () => {
  const { getValues } = useFormContext<User>();

  return (
    <Layout>
      <Card title="Successfully submitted">
        <Row>
          <BoldText>Name:</BoldText> {getValues().name}
        </Row>
        <Row>
          <BoldText>Age:</BoldText> {getValues().age}
        </Row>
        <Row>
          <BoldText>Email:</BoldText> {getValues().email}
        </Row>
        <Row>
          <BoldText>Newsletter:</BoldText> {getValues().newsletter}
        </Row>
      </Card>
    </Layout>
  );
};

const Row = styled.div`
  margin-top: 1rem;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export default Result;
