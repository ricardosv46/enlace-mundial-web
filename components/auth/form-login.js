import React, { useState } from "react"
import { GestionUsuario } from "../../gestion-de-endpoints/GestionUsuario"
import toast from "react-hot-toast"

export default function FormLogin({ setShow }) {
  const { loginUsuario } = GestionUsuario()
  const [alerta, setAlerta] = useState("")
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  })

  const { email, password } = usuario

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  const login = (e) => {
    e.preventDefault()
    if (email.trim() === "" || password.trim() === "") {
      setAlerta("Todos los campos son obligatorios")
      return
    }

    loginUsuario({
      email: email,
      password: password,
    }).then((res) => {
      if (res === "exito") {
        toast.success("Usuario Logeado correctamente")
        setShow(false)
      } else {
        setAlerta("Contraseña o usuario Incorrecto")
      }
    })
  }

  return (
    <form onSubmit={login}>
      <p className='text-danger text-center'>{alerta}</p>
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
          value='Ingresar'
        />
      </div>
    </form>
  )
}
