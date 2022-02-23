import "./App.css"
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import SignUpModal from "./Components/SignUpModal";
import PrivateHome from "./Pages/Private/PrivateHome/PrivateHome";
import Private from "./Pages/Private/Private"

function App() {
  return (
    <>
      <SignUpModal/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/private" element={<Private/>}>
            <Route path="/private/private-home" element={<PrivateHome />}/>
        </Route>
      </Routes>
    </>
    );
}

export default App;
