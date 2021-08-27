import React from "react";

export default function AuthForm() {
  return (
    <section className="auth-form">
      <div className="auth-form__header py-4 px-5">
        <img src="/logo.png" className="auth-form__logo" />
      </div>

      <div className="auth-form__body">
        <section className="auth-form__body-bg"></section>

        <section className="py-4 px-3">
          <h2 className="auth-form__titulo text-blue font-weight-bold">
            Iniciar sesión
          </h2>

          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn btn--google d-flex justify-content-center align-items-center"
            >
              <img src="/imagenes/auth/google.svg" className="mr-2" />
              Google
            </button>
            <button
              type="button"
              className="btn btn--facebook text-white d-flex justify-content-center align-items-center"
            >
              {/* <img src="/imagenes/auth/facebook.svg" className="mr-2" /> */}
              <span className="text-white d-inline-block mr-2">
                <i class="fab fa-facebook-f"></i>
              </span>
              Facebook
            </button>
          </div>

          <div className="separador mt-4"></div>

          <section className="mt-3">
            <div className="form-group">
              <input
                type="email"
                placeholder="Correo"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
              />
            </div>

            <div className="text-right">
              <input
                type="submit"
                className="btn btn-primary px-5"
                value="Ingresar"
              />
            </div>

            <div className="mt-4">
              <p className="text-muted">
                Si no tienes una cuenta
                <button
                  type="button"
                  className="btn btn-link text-blue font-weight-bold px-1"
                >
                  Regístrate aquí
                </button>
              </p>
            </div>
          </section>
        </section>
      </div>

      <div className="auth-form__footer pt-5 px-4">
        <ul className="list-unstyled">
          <li>
            <span className="d-inline-block mr-2">
              <i class="fab fa-facebook"></i>
            </span>

            <span>ENLACE MUNDIAL PERÚ</span>
          </li>

          <li>
            <span className="d-inline-block mr-2">
              <i class="far fa-envelope"></i>
            </span>

            <span>reservas@enlacemundialperu.com</span>
          </li>

          <li>
            <span className="d-inline-block mr-2">
              <i class="fas fa-globe-europe"></i>
            </span>

            <span>www.enlacemundialperu.com</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
