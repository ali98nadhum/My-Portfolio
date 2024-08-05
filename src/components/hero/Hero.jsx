import "./hero.css";
import Lottie from "lottie-react";
import dev from "../../../public/dev.json";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left-section">
        <div className="avatar">
          <img src="./avatar.png" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">Full stuck web developer</h1>
        <p className="subtitle">
          Computer engineer and a full-stack web developer with expertise in
          building and maintaining web applications. I have a strong background
          in both front-end and back-end development, allowing me to create
          seamless and efficient user experiences."
        </p>
        <div className="icons">
          <div className="icon icon-facebook-square"></div>
          <div className="icon icon-linkedin-square"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-instagram"></div>
        </div>
      </div>
      <div className="right-section">
      <Lottie
        className="contact-animation"
          style={{ height: "350px"  , width: "350px"}}
          animationData={dev}
        />
      </div>
    </section>
  );
};

export default Hero;
