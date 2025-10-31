import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
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
          hh
        </Link><img src="logo.png" alt="" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="search..." />
          <img src="search.png" alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src="upload.png" alt="" />
        <img src="more.png" alt="" />
        <img src="notification.png" alt="" />
        <img src="jack.png" alt="" className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;

// sidebar={sidebar}  setSidebar={setSidebar}/>
