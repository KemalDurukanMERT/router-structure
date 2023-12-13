import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />

        {/* <Route path="*" element={<NotFound />} /> */}

        <Route  path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  );
}

export default App;
