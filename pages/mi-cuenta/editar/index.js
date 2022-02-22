import react, { useContext, useEffect, useState } from "react"
import Link from "next/link"

import styles from "../styles.module.scss"
import { useRouter } from "next/router"
// Components
import SidebarCuenta from "@/components/mi-cuenta/sidebar"
import { ContextAuth } from "../../../context/ContextAuth"
import { GestionUsuario } from "../../../gestion-de-endpoints/GestionUsuario"
import toast from "react-hot-toast"

export default function MiCuenta() {
  const router = useRouter()
  const { updateUsuario } = GestionUsuario()
  const contextAuth = useContext(ContextAuth)
  const { dataUser: user, setDataUser } = contextAuth

  const [usuario, setUsuario] = useState({
    nombre: user.nombre,
    apellidos: user.apellidos,
    email: user.email,
    tipoDocumento: user.tipoDocumento ? user.tipoDocumento : "",
    numDocumento: user.numDocumento ? user.numDocumento : "",
    celular: user.celular ? user.celular : "",
  })

  const { nombre, apellidos, email, tipoDocumento, numDocumento, celular } =
    usuario

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  const update = (e) => {
    e.preventDefault()

    if (
      nombre.trim() === "" ||
      apellidos.trim() === "" ||
      email.trim() === ""
    ) {
      setAlerta("Todos los campos son obligatorios")
      return
    }

    updateUsuario({
      tipoUsuario: 1,
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      estado: "1",
      userId: user.userId,
      tipoDocumento: tipoDocumento,
      numDocumento: numDocumento,
      celular: celular,
    }).then((res) => {
      if (res === "exito") {
        toast.success("Usuario Actualizado correctamente")
        if (localStorage) {
          const data = JSON.parse(localStorage.getItem("usuario"))
          setDataUser(data)
        }
        router.push("/mi-cuenta")
      } else {
        toast.error("No se puedo Actualizar")
      }
    })
  }

  return (
    <>
      <section className={`${styles.miCuenta} container mt-4 mt-md-5`}>
        {/* Navegación */}
        <div className='row'>
          <div className='col-12 px-md-4 d-flex align-items-center'>
            <Link href='/mi-cuenta' passHref>
              <a className='btn btn-link text-dark'>
                Editar cuenta
                <span className='d-inline-block ml-2'>
                  <i className='fas fa-angle-right'></i>
                </span>
              </a>
            </Link>

            <span className='text-primary font-weight-bold'>Editar cuenta</span>
          </div>
        </div>

        <div className='row justify-content-around mt-3'>
          <div className='col-md-4'>
            <SidebarCuenta />
          </div>

          <div className='col-md-7 mt-4 mt-md-0'>
            <div className='p-3 shadow-card'>
              <h3 className='subtitulo-general font-weight-bold text-left'>
                Editar información personal
              </h3>

              <section className='mt-3'>
                <div className={`${styles.miCuenta_borderItem} pb-2 pb-2`}>
                  <h4 className='small font-weight-bold'>Nombres</h4>

                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      value={nombre}
                      name='nombre'
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-2`}>
                  <h4 className='small font-weight-bold'>Apellidos</h4>

                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      value={apellidos}
                      name='apellidos'
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-2`}>
                  <h4 className='small font-weight-bold'>Tipo Documento</h4>

                  <div className='form-group'>
                    <select
                      type='text'
                      className='form-control'
                      value={tipoDocumento}
                      name='tipoDocumento'
                      onChange={onChange}
                    >
                      <option value='DNI'>DNI</option>
                      <option value='CE'>CARNÉ DE EXTRAJERÍA</option>
                      <option value='PASAPORTE'>PASAPORTE</option>
                    </select>
                  </div>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-2`}>
                  <h4 className='small font-weight-bold'>N° de documento</h4>
                  <div className='form-group'>
                    <input
                      type='number'
                      min='0'
                      step='1'
                      className='form-control'
                      value={numDocumento}
                      name='numDocumento'
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-2`}>
                  <h4 className='small font-weight-bold'>
                    Dirección de correo electrónico
                  </h4>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      value={email}
                      name='email'
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-2`}>
                  <h4 className='small font-weight-bold'>Número de contacto</h4>
                  <div className='form-group'>
                    <input
                      type='number'
                      min='0'
                      step='1'
                      className='form-control'
                      value={celular}
                      name='celular'
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className='form-group text-right mt-4 '>
                  <input
                    type='submit'
                    value='Actualizar'
                    onClick={update}
                    className='btn btn-primary px-4'
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
