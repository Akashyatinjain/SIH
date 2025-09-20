import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Dashboard from "./Pages/dashboard.jsx";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
    </Routes>
  );
}

export default App;