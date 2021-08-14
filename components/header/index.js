import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container h-100">
        <img src="/logo.png" className="header__logo" />

        <button
          className="hamburger hamburger--collapse hamburger--header"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <nav className="header__nav d-flex justify-content-between align-items-center">
          {/* Menu items */}
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <li>
              <a href="" className="header__link">
                Inicio
              </a>
            </li>

            <li>
              <a href="" className="header__link">
                Luna de miel
              </a>
            </li>

            <li>
              <a href="" className="header__link">
                Crucero
              </a>
            </li>
          </ul>

          {/* Botones */}

          <section className="d-flex flex-column flex-md-row">
            <button type="button" className="btn btn-primary header__button">
              Iniciar sesión
            </button>

            <button
              type="button"
              className="btn btn-outline-primary header__button"
            >
              Regístrate
            </button>
          </section>
        </nav>
      </div>
    </header>
  );
}
