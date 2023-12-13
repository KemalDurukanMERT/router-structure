import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import People from "./pages/People";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="people" element={<People />} />
      </Routes>
    </>
  );
}

export default App;
