import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleWizardStart = () => {
    navigate("/new-user");
  };
  return (
    <div className="container mx-auto max-w-md mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
      <p className="mb-4">
        Welcome! You can enter the user creation flow by clicking the button
        below:
      </p>
      <button onClick={handleWizardStart} className="button_primary">
        Add a New User
      </button>
    </div>
  );
};

export default Dashboard;
