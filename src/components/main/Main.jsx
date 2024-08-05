import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProject";

const Main = () => {
  const [classActive, setClassActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleFilter = (category) => {
    setClassActive(category);
    if (category === "all") {
      setArr(myProjects);
    } else {
      const filteredArr = myProjects.filter((item) => item.category === category);
      setArr(filteredArr);
    }
  };

  return (
    <main className="main">
      <section className="left-section">
        <button
          onClick={() => handleFilter("all")}
          className={classActive === "all" ? "active" : null}
        >
          All-Projects
        </button>
        <button
          onClick={() => handleFilter("css")}
          className={classActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handleFilter("react")}
          className={classActive === "react" ? "active" : null}
        >
          REACT JS & NEXT JS
        </button>
        <button
          onClick={() => handleFilter("api")}
          className={classActive === "api" ? "active" : null}
        >
          API
        </button>
      </section>
      <section className="right-section">
        {arr.map((item) => (
          <article key={item.imagePath} className="card">
            <img src={item.imagePath} alt="" width={266} />
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{item.title}</h1>
              <p className="subtitle">{item.des}</p>
              <div className="icons">
                {item.link1 && (
                  <a
                    style={{ textDecoration: "none" }}
                    href={item.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon-link"></div>
                  </a>
                )}
                {item.link2 && (
                  <a
                    style={{ textDecoration: "none" }}
                    href={item.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon-github"></div>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
