import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [hidesearch, setHidesearch] = useState(true);
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => props.setSidebar(!props.sidebar)}
          src="menu.png"
          alt=""
        />
        <Link to="/">
          <img src="/logo.png" alt="" className="logo" />
        </Link>
      </div>
      <div className="sm-nav flex-div">
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <div className={hidesearch ? `inputOff` : `inputOn`}>
              <input type="text" placeholder="search..." />
            </div>
            <img
              src="/search.png"
              alt=""
              onClick={() => setHidesearch(!hidesearch)}
            />
          </div>
        </div>
      {hidesearch ?  <div className="nav-right flex-div">
          <img src="/upload.png" alt="" />
          <img src="/more.png" alt="" />
          <img src="/notification.png" alt="" />
          <img src="/profile.jpg" alt="" className="user-icon" />
        </div> : null}
      </div>
    </nav>
  );
}

export default Navbar;

// sidebar={sidebar}  setSidebar={setSidebar}/>
