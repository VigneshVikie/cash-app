import React from "react";


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

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
