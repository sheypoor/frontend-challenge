import { FC } from "react";
export interface SuccessContentProps {
  name: string;
}

const SuccessContent: FC<SuccessContentProps> = ({ name }) => {
  return (
    <div className="border border-success-700 bg-success-100 p-10 rounded-xl mt-6 text-left">
      Dear {name} !
      <br />
      Your account has been created successfully.
      <br />
      You can login to your account through the login page. Thank you for your
      cooperation.
    </div>
  );
};

export default SuccessContent;
