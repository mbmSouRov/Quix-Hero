import { Navbar } from "flowbite-react";
import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
const Header = () => {
  return (
    <div className="mx-6 mt-6">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-bold text-purple-800 flex gap-1">
            <span className="text-2xl">Quiz Hero </span>
            <RocketLaunchIcon className="h-7 w-7"></RocketLaunchIcon>
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
