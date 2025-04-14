import React from "react";
import sprite from '../sprite/symbol-defs.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="content-hero">
          <div className="img"></div>
          <h3 className="title-hero">Frontend web developer !</h3>
          <h5 className="subtitle-hero">
            Hi, I’m Artem. A passionate Front-end Web Developer based in Ukraine{" "}
          </h5>
          <div className="flex gap-[50px] w-[150px] m-auto">
            <svg className="fill-white" width={50} height={50}>
              <use href={`${sprite}#icon-telegram`}></use>
            </svg>
            <svg width={50} height={50}>
              <use href={`${sprite}#icon-gitHub`}></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
