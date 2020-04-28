import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = ({ history }) => {
  return (
    <>
      <nav className="bg-blue-400">
        <div className="flex px-5 py-3 justify-between items-center bg-blue-400 text-white max-w-screen-lg mx-auto">
          <div className="font-bold">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
          </div>
          {history.location.pathname === "/" && (
            <ul className="flex items-center">
              <li className="mr-5">
                <a href="/#how">How It Works</a>
              </li>
              <li className="mr-5">
                <a href="/#contact">Contact Us</a>
              </li>
              <li>
                <Link
                  to="/rent"
                  className="text-white hover:shadow-outline font-bold rounded inline-block border-4 border-gray-300 hover:shadow-outline px-3 py-2 cursor-pointer"
                >
                  Discover!
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default withRouter(NavBar);
