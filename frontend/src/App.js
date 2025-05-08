import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import UserDashboard from "./pages/UserDashboard";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/dashboard/:userId" element={<UserDashboard />}></Route>
          <Route path="/editProfile/:userId" element={<EditProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
