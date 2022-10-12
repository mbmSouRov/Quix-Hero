import { Navbar } from "flowbite-react";
import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mx-6 mt-6">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-bold text-purple-800 flex gap-1">
            <span className="text-2xl">
              {" "}
              <Link to="/">Quiz Hero</Link>{" "}
            </span>
            <RocketLaunchIcon className="h-7 w-7"></RocketLaunchIcon>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link
            className="font-light text-purple-600 text-xl hover:font-normal hover:text-purple-900"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="font-light text-purple-600 text-xl hover:font-normal hover:text-purple-900"
            to="/statistics"
          >
            Statistics
          </Link>
          <Link
            className="font-light text-purple-600 text-xl hover:font-normal hover:text-purple-900"
            to="/blog"
          >
            Blog
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
