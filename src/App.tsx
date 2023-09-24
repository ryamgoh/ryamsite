import Index from "./pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
