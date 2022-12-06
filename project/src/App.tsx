import { Routes, Route, BrowserRouter } from "react-router-dom";
import Step1 from "./page/Step1";
import Step2 from "./page/Step2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Step1 />} />
            <Route path="/step-two" element={<Step2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
