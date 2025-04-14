import React from "react";
import sprite from "../sprite/symbol-defs.svg";

function Tech() {
  const tech = [
    { id: 1, img: `${sprite}#icon-bootstrap` },
    { id: 2, img: `${sprite}#icon-html` },
    { id: 3, img: `${sprite}#icon-css` },
    { id: 4, img: `${sprite}#icon-javascript` },
    { id: 5, img: `${sprite}#icon-nodejs` },
    { id: 6, img: `${sprite}#icon-react-native` },
    { id: 7, img: `${sprite}#icon-sass` },
    { id: 8, img: `${sprite}#icon-tailwindcss` },
    { id: 9, img: `${sprite}#icon-handlebars` },
  ];
  return (
    <section className="mt-[80px]">
      <div className="container">
        <p className="text-[20px] font-semibold text-white text-center mb-[50px]">
          Tech Stocks
        </p>
        <ul className="flex m-auto flex-wrap justify-between  gap-y-[20px]">
          {tech.map(({ id, img }) => (
            <li className="ml-[20px] mr-[20px]" key={id}>
              <svg className="w-12 h-12 ">
                <use href={img}></use>
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tech;
