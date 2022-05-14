import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Login } from "./pages/Login";
import { Signup } from "./pages/signup";
import MockmanEs from "mockman-js";
import { Index } from "./pages/Index";
import { Homepage } from "./pages/Homepage";
import { Archive } from "./pages/Archive";
import { PrivateRoute } from "./components/PrivateRoutes";
import { Label } from "./pages/Label";
import { RestrictedRoutes } from "./components/RestrictedRoutes";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route element={<PrivateRoute/>}>
            <Route path="/homepage" element={<Homepage/>}/>
            <Route path="/archive" element={<Archive/>}/>
            <Route path="/label" element = {<Label/>}/>
        </Route>
        <Route path="/mock" element={<MockmanEs/>}/>
        <Route element={<RestrictedRoutes/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Route>

      </Routes>
      </div>
 
  );
}

export default App;
