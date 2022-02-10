import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
