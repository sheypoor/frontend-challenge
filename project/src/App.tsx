import { Routes, Route, BrowserRouter } from "react-router-dom";
import Step1 from "./page/Step1";
import Step2 from "./page/Step2";
import { useForm, FormProvider } from "react-hook-form";
import { User } from "sdk";

function App() {
  const methods = useForm<User>();

  return (
    <div className="App">
      <FormProvider {...methods}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Step1 />} />
              <Route path="/step2" element={<Step2 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </div>
  );
}

export default App;
