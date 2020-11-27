import React from "react";

import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

import Logo from "../Logo";

const duration = 250;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, visibility: "hidden" }
};

const OffCanvas = ({ show, handleShow }) => {
  return (
    <Transition in={show} timeout={duration}>
      {(state) => {
        console.log(state);
        return (
          <div
            className="offcanvas"
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <div className="offcanvas__header">
              <div className="offcanvas__logo">
                <Logo />
              </div>
              <button
                className="offcanvas__close"
                onClick={() => handleShow?.()}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1l14 14m0-14L1 15"
                    stroke="#1A212F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="offcanvas__body">
              <div className="offcanvas__nav">
                <a href="/" className="offcanvas__link">
                  Почему мы?
                </a>
                <Link to="/products" className="offcanvas__link">
                  Номера
                </Link>
                <a href="/" className="offcanvas__link">
                  Отзывы
                </a>
                <a href="/" className="offcanvas__link">
                  Как нас найти
                </a>
              </div>
            </div>
          </div>
        );
      }}
    </Transition>
  );
};

export default OffCanvas;
