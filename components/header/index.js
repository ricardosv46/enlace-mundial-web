import React from "react";

import Link from "next/link";

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
              <Link href="/">Inicio</Link>
            </li>

            <li>
              <Link href="luna-de-miel">Luna de miel</Link>
            </li>

            <li>
              <Link href="">Crucero</Link>
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
