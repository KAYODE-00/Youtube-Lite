import Navbar from "./Compo/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Video from './Pages/Videos/Video'
import { useState } from "react";

function App() {
  const [sidebar,setSidebar] = useState(true)
  return (
    <>
      <Navbar sidebar={sidebar}  setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}  setSidebar={setSidebar}/>} />
         <Route path="/video/:videoId/:categoryId" element={<Video />} />
    </Routes>

    </>
  );
}

export default App;
