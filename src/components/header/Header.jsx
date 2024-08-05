import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModel , setshowModel] = useState(false);
  const [theme , setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if(theme === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  } , [theme])

  return (
    <header>
      <button onClick={()=>{setshowModel(true)}} className="menu icon-menu"></button>
      <div></div>
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Article</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Spakeing</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode" onClick={() => {
        localStorage.setItem("currentMode" , theme === "dark" ? "light" : "dark")
        setTheme(localStorage.getItem("currentMode"))
      }} >
        {theme === 'dark' ? (<span className="icon-moon-o"></span>) : <span className="icon-sun"></span>}
      </button>

      {showModel && (
        <div className="model">
        <ul>
          <li><button className="icon-close" onClick={()=>{setshowModel(false)}}></button></li>
          <li><a href="">About</a></li>
          <li><a href="">Article</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Uses</a></li>
        </ul>
    </div>
      )}

    </header>
  );
};

export default Header;
