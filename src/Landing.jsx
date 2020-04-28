import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./css/index.css";
import styled from "styled-components";
import heroSmall from "./images/hero-small.jpg";
import heroMid from "./images/hero-mid.jpg";

const HeroImage = styled.img`
  @media screen and (max-width: 768px) {
    filter: contrast(150%) brightness(30%);
  }
`;
const Landing = ({ history }) => {
  const [justSubmitted, setJustSubmitted] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setJustSubmitted(true);
    setFormName("");
    setFormMessage("");
    setFormPhone("");
    setTimeout(() => {
      setJustSubmitted(false);
    }, 5000);
  };
  return (
    <>
      <div className="text-white relative mx-auto md:flex items-center hero md:shadow-md">
        <div className="h-full w-full absolute top-0 md:relative md:w-1/2 text-center md:text-left flex justify-center items-center z-10">
          <div className="md:pl-4 text-blue-100 md:text-blue-900 leading-none">
            <p className="text-xl lg:text-4xl font-extrabold">
              Finding properties made easy
            </p>
            <p className="text-lg lg:text-2xl font-semibold">
              Discover houses that fits your preferences hassle free
            </p>
            <Link
              to="/rent"
              className="bg-blue-500 hover:bg-blue-600 text-white hover:shadow-outline font-bold py-3 px-4 rounded inline-block mt-3 cursor-pointer"
              style={{ color: "white" }}
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="relative top-0 md:w-1/2">
          <HeroImage
            srcSet={`${heroSmall} 640w, ${heroMid} 1920w`}
            sizes="(max-width:768px) 100vw, 50vw"
            src={heroMid}
            alt="fine house"
          />
        </div>
      </div>
      <div
        id="how"
        className="how mt-10 mb-10 p-5 rounded shadow-xl text-black w-10/12 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center text-center border-t-4 border-solid border-red-600 relative z-10"
      >
        <div className="p-5">
          <i className="fas fa-file-signature fa-2x border border-solid rounded-full p-3 text-yellow-900 bg-yellow-100" />
          <p className="font-bold mb-2">Describe your interest</p>
          <p className="font-light">
            Answer questions about the type of house you are looking for
          </p>
        </div>
        <div className="p-5">
          <i className="fab fa-think-peaks fa-2x border border-solid rounded-full p-3 text-red-900 bg-red-100" />
          <p className="font-bold mb-2">We find the best fit</p>
          <p className="font-light">
            We process your preferences and present suitable choices houses
          </p>
        </div>
        <div className="p-5">
          <i className="fas fa-smile fa-2x border border-solid rounded-full p-3 text-blue-900 bg-blue-100" />
          <p className="font-bold mb-2">You select your choice</p>
          <p className="font-light">
            Select from the choices and proceed with the contact information
            provided
          </p>
        </div>
      </div>
      <div
        className="bg-gray-800 text-gray-100"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23a0aec0' fill-opacity='0.09'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      >
        <div id="contact" className="p-5 max-w-screen-md mx-auto">
          <p className="mb-5">Have an enquiry? Get in touch!</p>
          <form className="w-full" onSubmit={handleContactSubmit}>
            <label htmlFor="name" className="block mb-5">
              Name
              <input
                type="text"
                name="name"
                id="name"
                value={formName}
                onChange={({ target }) => {
                  setFormName(target.value);
                }}
                className="block px-3 py-2 bg-gray-100 w-full mt-2 rounded text-black shadow-inner"
              />
            </label>
            <label htmlFor="phone" className="block mb-5">
              Phone
              <input
                type="phone"
                name="phone"
                id="message"
                value={formPhone}
                onChange={({ target }) => {
                  setFormPhone(target.value);
                }}
                className="block px-3 py-2 bg-gray-100 w-full mt-2 rounded text-black"
              />
            </label>
            <label htmlFor="message" className="block mb-5">
              Message
              <textarea
                name="message"
                id="message"
                value={formMessage}
                onChange={({ target }) => {
                  setFormMessage(target.value);
                }}
                className="block px-3 py-2 bg-gray-100 w-full mt-2 rounded text-black"
              />
            </label>
            <input
              type="submit"
              value="Send"
              className="px-4 py-3 rounded bg-gray-800 border border-gray-100 text-white"
            />
          </form>
          {justSubmitted && (
            <p className="text-xl">
              Thanks for your message, We&apos;ll be in contact shortly
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(Landing);
