import React from "react";
import HeroDesktopImg from "../../images/image-web-3-desktop.jpg";
import HeroMobileImg from "../../images/image-web-3-mobile.jpg";
import ReadMore from "../Buttons/ReadMore";
import "../../sass/main/hero.scss";

function Hero() {
  const mobileWidth = window.innerWidth <= 810;

  return (
    <section className="hero">
      <img
        className="hero__img"
        src={mobileWidth ? HeroMobileImg : HeroDesktopImg}
        alt="Colorful shapes and blocks"
      />
      <div className="cta">
        <header>
          <h1 className="cta__heading"> The Bright Future of Web 3.0?</h1>
        </header>

        <div>
          <p className="cta__description">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <ReadMore />
        </div>
      </div>
    </section>
  );
}

export default Hero;
