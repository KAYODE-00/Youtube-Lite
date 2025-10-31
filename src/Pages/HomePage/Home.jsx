import {  useState } from "react";
import Feed from "../../Compo/Feed/Feed";
import Sidebar from "../../Compo/Sidebar/Sidebar";
import "./Home.css";

function Home(props) {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        setSidebar={props.setSidebar}
        sidebar={props.sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${props.sidebar ? `` : `large-container`}`}>
        <Feed category={category} setCategory={setCategory} />
      </div>
    </>
  );
}

export default Home;
