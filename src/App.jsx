import React from "react";
import "./styles.css";
import ProfileInfoCapture from "./componenets/ProfileInfoCapture";
import PersonalInfoCapture from "./componenets/PersonalInfoCapture";
import Wizard from "./componenets/Wizard";
import { validateEmail } from "./utils/utils";

//steps schema, could be dynamically.
//can be improved to be generic if whole schema including fields and their types define here
const steps = [
  {
    title: "Personal Information",
    component: PersonalInfoCapture,
    validate: (user) => {
      if (
        user.name.trim() === "" ||
        isNaN(user.age) ||
        parseInt(user.age) <= 0 //min allowed age
      ) {
        return "Please enter valid name and age.";
      } else {
        return false;
      }
    },
  },
  {
    title: "Profile Information",
    component: ProfileInfoCapture,
    validate: (user) => {
      if (!validateEmail(user.email)) {
        return "Please enter a valid email.";
      } else {
        return false;
      }
    },
  },
];

const App = () => {
  return <Wizard steps={steps} title="User Creation Wizard" />;
};

export default App;
