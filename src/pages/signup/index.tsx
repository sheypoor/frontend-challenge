import { Row, Col } from "reactstrap";
import Stepper from "../../components/Stepper/Stepper";

import UserInfo from "./Steps/UserInfo";
import Account from "./Steps/Account";

const steps = [
  {
    title: "Personal Information",
    content: <UserInfo />,
  },
  {
    title: "Account Information",
    content: <Account />,
  },
];

function SignUp() {
  return (
    <div className="pt-5">
      
      <Row className="justify-content-center m-0 h-100">
        <Col xs={12} lg={6}>
          <Stepper steps={steps} />
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
