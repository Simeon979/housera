import React from "react";
import "./css/index.css";

const Footer = () => (
  <footer className="bg-gray-900 flex text-white py-5 flex-col md:flex-row justify-center items-center text-center">
    <div className="w-1/2">Copyright {new Date().getFullYear()}</div>
    <div className="w-1/2">
      Made with love by{" "}
      <a href="https://simeon979.github.io" className="underline">
        Simeon
      </a>
    </div>
  </footer>
);

export default Footer;
