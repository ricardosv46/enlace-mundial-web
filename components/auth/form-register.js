import React, { useState } from "react"
import { GestionUsuario } from "../../gestion-de-endpoints/GestionUsuario"

export default function FormRegister({ setTipoForm }) {
  const { createUsuario } = GestionUsuario()

  const [alerta, setAlerta] = useState("")

  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
  })

  const { nombre, apellidos, email, password } = usuario

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  const create = (e) => {
    e.preventDefault()

    if (
      nombre.trim() === "" ||
      apellidos.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setAlerta("Todos los campos son obligatorios")
      return
    }

    createUsuario({
      tipoUsuario: 1,
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      estado: "1",
      password: password,
      tipoDocumento: "",
      numDocumento: "",
      celular: "",
    }).then((res) => {
      if (res === "exito") {
        setTipoForm("login")
      } else {
        setAlerta("Hubo un error al crear usuario")
      }
    })
  }

  return (
    <form onSubmit={create}>
      <p className='text-danger text-center'>{alerta}</p>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Nombres'
          value={nombre}
          name='nombre'
          className='form-control'
          onChange={onChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          placeholder='Apellidos'
          value={apellidos}
          name='apellidos'
          className='form-control'
          onChange={onChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='email'
          placeholder='Correo'
          value={email}
          name='email'
          className='form-control'
          onChange={onChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          name='password'
          className='form-control'
          onChange={onChange}
        />
      </div>
      <div className='text-right d-flex justify-content-center'>
        <input
          type='submit'
          className='btn btn-primary px-5'
          value='Crear Cuenta'
        />
      </div>
    </form>
  )
}
