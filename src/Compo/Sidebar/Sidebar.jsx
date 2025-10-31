import React from "react";
import "./Sidebar.css";
// sidebar={sidebar}  setSidebar={setSidebar}/>
function Sidebar(props) {
  return (
    <div className={`sidebar ${props.sidebar ? `` : `small-sidebar`}`}>
      <div className="shortcut-links">
        <div
          className={`side-links ${props.category === 0 ? `active` : ``}`}
          onClick={() => props.setCategory(0)}
        >
          <img src="home.png" alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-links ${props.category === 20 ? `active` : ``}`}
          onClick={() => props.setCategory(20)}
        >
          <img src="game_icon.png" alt="" />
          <p>Games</p>
        </div>
        <div
          className={`side-links ${props.category === 2 ? `active` : ``}`}
          onClick={() => props.setCategory(2)}
        >
          <img src="automobiles.png" alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-links ${props.category === 17 ? `active` : ``}`}
          onClick={() => props.setCategory(17)}
        >
          <img src="sports.png" alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side-links ${props.category === 24 ? `active` : ``}`}
          onClick={() => props.setCategory(24)}
        >
          <img src="entertainment.png" alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-links ${props.category === 28 ? `active` : ``}`}
          onClick={() => props.setCategory(28)}
        >
          <img src="tech.png" alt="" />
          <p>Technology</p>
        </div>{" "}
        <div
          className={`side-links ${props.category === 10 ? `active` : ``}`}
          onClick={() => props.setCategory(10)}
        >
          <img src="music.png" alt="" />
          <p>Music</p>
        </div>{" "}
        <div
          className={`side-links ${props.category === 22 ? `active` : ``}`}
          onClick={() => props.setCategory(22)}
        >
          <img src="blogs.png" alt="" />
          <p>Blogs</p>
        </div>{" "}
        <div
          className={`side-links ${props.category === 25 ? `active` : ``}`}
          onClick={() => props.setCategory(25)}
        >
          <img src="news.png" alt="" />
          <p>News </p>
        </div>{" "}
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>{props.sidebar ? `Subscribe` : ``}</h3>
        <div className="side-links" onClick={() => props.setCategory(0)}>
          <img src="/vital.jpg" alt="" />
          <p>Madam</p>
        </div>
        <div className="side-links" onClick={() => props.setCategory(0)}>
          <img src="/valent.jpg" alt="" />
          <p>Wonder Woman</p>
        </div>
        <div className="side-links" onClick={() => props.setCategory(0)}>
          <img src="/karsten.jpg" alt="" />
          <p>Karsten</p>
        </div>
        <div className="side-links" onClick={() => props.setCategory(0)}>
          <img src="/dwayne.jpg" alt="" />
          <p>Dwayne</p>
        </div>
        <div className="side-links" onClick={() => props.setCategory(0)}>
          <img src="/alicia.jpg" alt="" />
          <p>Alicia</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
