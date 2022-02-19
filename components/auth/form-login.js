import React from "react"

import { gql, useMutation } from "@apollo/client"

const LOGIN = gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
      id
      typeUser
      tipoInicio
      typeDocument
      numberDocument
      name
      sexo
      urlPhoto
      photo
      surnames
      email
      api_token
      customer_id
    }
  }
`

export default function FormLogin() {
  const email = "ehldev@gmail.com"
  const password = "secret"

  const [loginAction] = useMutation(LOGIN, {
    variables: {
      input: {
        email,
        password,
        tipoInicio: 1,
      },
    },
    onCompleted: (data) => {
      console.log(data)
      // data.login && router.push("/");
    },
  })

  const login = (e) => {
    e.preventDefault()

    loginAction()
  }

  return (
    <form onSubmit={login}>
      <div className='form-group'>
        <input type='email' placeholder='Correo' className='form-control' />
      </div>

      <div className='form-group'>
        <input
          type='password'
          placeholder='Contraseña'
          className='form-control'
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
