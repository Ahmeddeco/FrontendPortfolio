import React, { createElement, useState } from "react";
import { content } from "../Content";

const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);

  return (
    <div className='flex '>
      <nav className='fixed gap-5 hidden sm:flex sm:flex-row flex-col justify-center items-center left-10 z-50 top-5 bg-slate-200/40 px-6 py-3 backdrop-blur-lg rounded-full text-dark_primary duration-300 max-w-lg'>
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5  rounded-full hover:bg-blue-300 hover:text-white duration-500 hover:scale-105 md:cursor-pointer ${
              i === active && "bg-orangy text-white"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
