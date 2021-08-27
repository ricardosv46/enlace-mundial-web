import React from "react";

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
            <i class="fas fa-times"></i>
          </button>

          <section>
            <AuthForm />
          </section>
        </Modal>
      </ModalProvider>

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
                <Link href="/cruceros">Crucero</Link>
              </li>
            </ul>

            {/* Botones */}
            <section className="d-flex flex-column flex-md-row">
              <button
                type="button"
                className="btn btn-primary header__button"
                onClick={openModal}
              >
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
    </section>
  );
}
