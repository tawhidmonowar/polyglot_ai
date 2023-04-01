import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      </Routes>
    </>
  );
}

export default App;
