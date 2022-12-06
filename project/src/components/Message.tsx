import styled from "styled-components";

type MessageType = "SUCCESS" | "ERROR" | "WARN" | "INFO";

const getColor = (type: "SUCCESS" | "ERROR" | "WARN" | "INFO") => {
  switch (type) {
    case "ERROR":
      return "red";
    case "INFO":
      return "blue";
    case "SUCCESS":
      return "green";
    case "WARN":
      return "orange";
    default:
      return "gray";
  }
};

const Message = styled.p<{ type: MessageType }>`
  background: ${(props) => getColor(props.type)};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
`;

export default Message;
