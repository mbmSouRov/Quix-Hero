import { Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div className="m-1.5">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Quiz Hero
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/home">Home</Navbar.Link>
          <Navbar.Link href="/statistics">Statistics</Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
