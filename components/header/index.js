import React, { useState } from "react";

import Link from "next/link";

// https://reactjsexample.com/a-simple-react-modal-with-hook-based-api
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";

import AuthForm from "@/components/auth/auth-form.js";

export default function Header() {
  const { isModalOpen, openModal, closeModal } = useModal("modal-auth");

  const [navStatus, setNavStatus] = useState(false);

  function cambiarEstadoNav() {
    setNavStatus(!navStatus);
  }

  return (
    <section>
      <ModalProvider>
        <Modal
          id="modal-auth"
          className="modal-auth"
          isOpen={isModalOpen}
          transition={ModalTransition.TOP_DOWN}
        >
          <button
            className="modal-auth__close bg-transparent"
            onClick={closeModal}
          >
            <i className="fas fa-times"></i>
          </button>

          <section>
            <AuthForm />
          </section>
        </Modal>
      </ModalProvider>

      <header className="header">
        <div className="header__container h-100">
          <Link href="/" className="pointer" passHref>
            <img
              src="/logo.png"
              alt="Picture of the author"
              className="header__logo pointer"
            />
          </Link>

          <button
            className={`hamburger hamburger--collapse hamburger--header ${
              navStatus ? "is-active" : ""
            }`}
            type="button"
            onClick={cambiarEstadoNav}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <nav
            className={`header__nav d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 pb-5 py-md-0 ${
              navStatus ? "header__nav--active" : ""
            }`}
          >
            {/* Menu items */}
            <ul className="list-unstyled d-flex flex-column flex-md-row align-items-center mt-0 mb-0 py-3 py-lg-0">
              <li>
                <Link href="/">Inicio</Link>
              </li>

              <li>
                <Link href="luna-de-miel">Luna de miel</Link>
              </li>

              <li>
                <Link href="/cruceros">Crucero</Link>
              </li>

              <li>
                <Link href="/actividades-y-turismo">Actividades y turismo</Link>
              </li>
            </ul>

            {/* Botones */}
            <section className="d-flex flex-column flex-md-row">
              <div className="header__button-c d-flex justify-content-center align-items-center">
                <button
                  type="button"
                  className="btn btn-primary header__button d-flex justify-content-center align-items-center"
                  onClick={openModal}
                >
                  Iniciar sesión
                </button>
              </div>

              <div className="header__button-c d-flex justify-content-center align-items-center mt-3 mt-lg-0">
                <button
                  type="button"
                  className="btn btn-outline-primary header__button d-flex justify-content-center align-items-center"
                >
                  Regístrate
                </button>
              </div>
            </section>
          </nav>
        </div>
      </header>
    </section>
  );
}
