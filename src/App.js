import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import Fullstack from "./pages/Fullstack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false)

  return (
    <>
      <Nav user={user} setUser={setUser}/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />

        <Route path="paths" element={<Paths />}>
          <Route index element={<Fullstack />} />
          <Route path="aws" element={<Aws />} />
        </Route>

        <Route path="contact" element={<PrivateRouter  user_data={user} update_user={setUser} />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="login" element={<Login  user={user} setUser={setUser}/>} />

        {/* <Route path="*" element={<NotFound />} /> */}

        <Route  path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  );
}

export default App;
