import Navbar from "./Compo/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";

import { useEffect, useState } from "react";
import Video from "./Pages/Videos/Video";

function App() {
  const [sidebar,setSidebar] = useState(true)
  const [darkMode,setDarkMode] = useState(true)



  useEffect(() => {
    document.body.classList.toggle("darkMode", darkMode);
  }, [darkMode]);


  return (
    <>
      <Navbar sidebar={sidebar}  setSidebar={setSidebar} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}  setSidebar={setSidebar}/>} />
         <Route path="/video/:videoId/:categoryId" element={<Video />} />
    </Routes>


    </>
  );
}

export default App;
