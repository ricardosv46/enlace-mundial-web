import React, { useState } from "react"

import styles from "./styles.module.scss"

// Components
import FormLogin from "../form-login"
import FormRegister from "../form-register"

export default function AuthForm() {
  const [tipoForm, setTipoForm] = useState("login")

  const asignarFormulario = () => {
    let component = null

    if (tipoForm === "login") {
      component = <FormLogin />
    } else if (tipoForm === "register") {
      component = <FormRegister />
    }

    return component
  }

  const cambiarFormulario = () => {
    if (tipoForm === "login") {
      setTipoForm("register")
    } else if (tipoForm === "register") {
      setTipoForm("login")
    }
  }

  const textoBtnCambiarForm = () => {
    let textos = []

    if (tipoForm === "login") {
      textos[0] = "Si no tienes una cuenta"
      textos[1] = "regístrate aquí"
    } else if (tipoForm === "register") {
      textos[0] = "Si ya tienes una cuenta"
      textos[1] = "ingrese por aquí"
    }

    return textos
  }

  return (
    <section className={styles.authForm}>
      <div className={`${styles.formHeader} py-3 px-5`}>
        <img
          src='/logo.png'
          alt='Logo Enlace mundial'
          className={styles.formLogo}
        />
      </div>

      <div className={styles.formBody}>
        <section className={styles.formBodyBg}></section>

        <section className='py-3 px-3'>
          <h2
            className={`${styles.formTitulo} text-blue font-weight-bold text-center`}
          >
            Iniciar sesión
          </h2>

          <div className='separador mt-3'></div>

          <section className='mt-3'>
            {asignarFormulario()}

            {/* <div className="text-right">
              <input
                type="submit"
                className="btn btn-primary px-5"
                value="Ingresar"
              />
            </div> */}

            <div className='mt-2 d-flex justify-content-center'>
              <p className='text-muted'>
                {textoBtnCambiarForm()[0]}
                <button
                  type='button'
                  className='btn btn-link text-blue font-weight-bold px-1'
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
  )
}
