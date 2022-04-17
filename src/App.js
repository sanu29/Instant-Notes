import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Login } from "./pages/Login";
import { Signup } from "./pages/signup";
import MockmanEs from "mockman-js";
import { Index } from "./pages/Index";
import { Homepage } from "./pages/Homepage";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mock" element={<MockmanEs/>}/>
      </Routes>
      </div>
 
  );
}

export default App;
