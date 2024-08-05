
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Main from "./components/main/Main"
import Content from "./components/contact/Contact"
import { useEffect, useState } from "react"

function App() {

  useEffect(() => {
    window.addEventListener("scroll" , () => {
      if(window.scrollY > 300){
        setShowScrollBtn(true);
        
      } else{
        setShowScrollBtn(false);
      }
    })
  } , [])

 const [showScrollBtn , setShowScrollBtn] = useState(false);

  return (
    <div id="up" className="container">
      <Header/>
      <Hero/>
      <div className="line"></div>
      <Main/>
      <div className="line"></div>
      <Content/>
      <div className="line"></div>
      {showScrollBtn  && (
        <a href="#up" style={{color: "#fff"}}>
        <button className="scroll-top icon-arrow-up"></button>
        </a>
      )}
    </div>
  )
}

export default App
