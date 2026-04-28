import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import LoginScreen from "./Components/LoginScreen";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/loginScreen" element={<LoginScreen />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;