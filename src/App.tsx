import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleCatPage from "./pages/SingleCatPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-cat/:id" element={<SingleCatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
