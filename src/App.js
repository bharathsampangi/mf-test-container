import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Remote from "./Remote";

function App({ history }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mftest" element={<Remote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
