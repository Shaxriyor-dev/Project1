import "./App.css";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import Navbar from "./pages/Navbar.jsx";
import Info from "./components/Info.jsx";
import Login from "./components/Login.jsx";
import School from "./components/School.jsx";
import Finance from "./components/Finance.jsx";
import Settings from "./components/Settings.jsx";
import Notfaund from "./components/Notfaund.jsx";
import Education from "./components/Education.jsx";
import { IoIosHome } from "react-icons/io";
import { PiNetworkBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import Books from "./components/Books.jsx";
import { Route, Routes, NavLink , Link } from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex">
        <div className="w-[140px] h-[100%] p-12 bg-gray-900  flex-wrap gap-30px text-white align-center ">
          <ul className="flex gap-13 flex-wrap p-0">
            <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-white'} to="/">
              {" "}
              <IoIosHome className="text-4xl" />
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-white'} to="/education">
              <IoSchoolSharp className="text-4xl" />
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-white'} to="/finance">
              <IoBook className="text-4xl" />
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-white'} to="/school">
              <PiNetworkBold className="text-4xl" />
            </NavLink>
          </ul>
          <div className="h-[30px]"></div>
          <div className=" flex gap-2 flex-wrap items-end mt-[49.5px]">
            <Link className="mt-10 hover:text-blue-500 " to={"/settings"}>
              <IoSettingsOutline className="text-4xl" />
            </Link>
            <Link className="mt-10 hover:text-blue-500 " to={"/info"}>
              <FaCircleInfo className="text-4xl" />
            </Link>
          </div>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/school" element={<School />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/book" element={<Books />} />
            <Route path="*" element={<Notfaund />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
