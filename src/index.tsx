import React from "react";
import ReactDOM from "react-dom/client";
import CreateUserPage from "pages/CreateUser";
import "./styles/_global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CreateUserPage />
  </React.StrictMode>
);
