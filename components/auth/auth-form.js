import React, { useState } from "react";

// Components
import FormLogin from "./form-login";
import FormRegister from "./form-register";

export default function AuthForm() {
  const [tipoForm, setTipoForm] = useState("login");

  const asignarFormulario = () => {
    let component = null;

    if (tipoForm === "login") {
      component = <FormLogin />;
    } else if (tipoForm === "register") {
      component = <FormRegister />;
    }

    return component;
  };

  const cambiarFormulario = () => {
    if (tipoForm === "login") {
      setTipoForm("register");
    } else if (tipoForm === "register") {
      setTipoForm("login");
    }
  };

  const textoBtnCambiarForm = () => {
    let textos = [];

    if (tipoForm === "login") {
      textos[0] = "Si no tienes una cuenta";
      textos[1] = "Regístrate aquí";
    } else if (tipoForm === "register") {
      textos[0] = "Si ya tienes una cuenta";
      textos[1] = "Ingrese por aquí";
    }

    return textos;
  };

  return (
    <section className="auth-form">
      <div className="auth-form__header py-3 px-5">
        <img
          src="/logo.png"
          alt="Logo Enlace mundial"
          className="auth-form__logo"
        />
      </div>

      <div className="auth-form__body">
        <section className="auth-form__body-bg"></section>

        <section className="py-3 px-3">
          <h2 className="auth-form__titulo text-blue font-weight-bold">
            Iniciar sesión
          </h2>

          <div className="d-flex justify-content-between mt-2">
            <button
              type="button"
              className="btn btn--google d-flex justify-content-center align-items-center"
            >
              <img
                src="/imagenes/auth/google.svg"
                alt="Ingresar con Google"
                className="mr-2"
              />
              Google
            </button>
            <button
              type="button"
              className="btn btn--facebook text-white d-flex justify-content-center align-items-center"
            >
              {/* <img src="/imagenes/auth/facebook.svg" className="mr-2" /> */}
              <span className="text-white d-inline-block mr-2">
                <i className="fab fa-facebook-f"></i>
              </span>
              Facebook
            </button>
          </div>

          <div className="separador mt-3"></div>

          <section className="mt-3">
            {asignarFormulario()}

            <div className="text-right">
              <input
                type="submit"
                className="btn btn-primary px-5"
                value="Ingresar"
              />
            </div>

            <div className="mt-2">
              <p className="text-muted">
                {textoBtnCambiarForm()[0]}
                <button
                  type="button"
                  className="btn btn-link text-blue font-weight-bold px-1"
                  onClick={cambiarFormulario}
                >
                  {textoBtnCambiarForm()[1]}
                </button>
              </p>
            </div>
          </section>
        </section>
      </div>

      {/* <div className="auth-form__footer pt-5 px-4">
        <ul className="list-unstyled">
          <li>
            <span className="d-inline-block mr-2">
              <i className="fab fa-facebook"></i>
            </span>

            <span>ENLACE MUNDIAL PERÚ</span>
          </li>

          <li>
            <span className="d-inline-block mr-2">
              <i className="far fa-envelope"></i>
            </span>

            <span>reservas@enlacemundialperu.com</span>
          </li>

          <li>
            <span className="d-inline-block mr-2">
              <i className="fas fa-globe-europe"></i>
            </span>

            <span>www.enlacemundialperu.com</span>
          </li>
        </ul>
      </div> */}
    </section>
  );
}
