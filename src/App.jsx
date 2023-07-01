import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
