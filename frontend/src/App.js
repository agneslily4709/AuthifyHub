import './App.css';
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Profile from "./components/Profile"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signout from './components/Signout';
function App() {
  return (
        <>
                <BrowserRouter>
                <Routes>
                        <Route path="/signin" element={<Signin/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/signout" element={<Signout/>}/>
                </Routes>
                </BrowserRouter>
        </>
  );
}

export default App;