import Index from "./pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Second from "./pages/Second";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Second />} />
        <Route path="/second" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
