import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormStateService from "../../application/service/formStateService";
import FirstStepForm from "../view/firstStep";
import SecondStepForm from "../view/secondStep";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstStepForm />,
  },
  {
    path: "/second-step",
    element: <SecondStepForm />,
  },
]);

const Container = () => {
  return (
    <FormStateService>
      <RouterProvider router={router} />
    </FormStateService>
  );
};

export default Container;
