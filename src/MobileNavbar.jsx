import React, { useState } from "react";

const navItems = [
  { text: "SIGN IN", link: "/" },
  { text: "LEGAL", link: "/" },
  { text: "LICENSES", link: "/" },
  { text: "SECURITY", link: "/" },
  { text: "CAREERS", link: "/" },
  { text: "PRESS", link: "/" },
  { text: "SUPPORT", link: "/" },
  { text: "STATUS", link: "/" },
  { text: "CODEBLOG", link: "/" },
];

const MobileNavbar = () => {
  const [burgerClick, setBurgerClick] = useState(false);
  const [linkClass, setLinkClass] = useState("nav-hidden");

  const handleClick = () => {
    if(!burgerClick){
        setLinkClass("nav-visible")
    }
    else(setLinkClass("nav-hidden"))
    setBurgerClick(!burgerClick)
  };
  console.log(linkClass);
  return (
    <div className="mobile-nav">
      <ul className={linkClass}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a onClick={handleClick} href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      <label htmlFor="burger" className={"burger"}>
        <input id="burger" type="checkbox" onChange={handleClick} checked={burgerClick} />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default MobileNavbar;
