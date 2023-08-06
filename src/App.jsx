import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles.css";
import ProfileInfoCapture from "./componenets/steps/ProfileInfoCapture";
import PersonalInfoCapture from "./componenets/steps/PersonalInfoCapture";
import Wizard from "./componenets/Wizard";
import { validateEmail } from "./utils/utils";
import Dashboard from "./componenets/Dashboard";

//steps schema, could be dynamically.
//can be improved to be generic if whole schema including fields and their types define here
const userCreationSteps = [
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
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route
            path="/new-user"
            element={
              <Wizard steps={userCreationSteps} title="User Creation Wizard" />
            }
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
