import React from "react";

import { gql, useMutation } from "@apollo/client";

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
`;

export default function FormLogin() {
  /* const [login, { data, loading, error }] = useMutation(LOGIN, {
    variables: {
      loginInput: {
        email: "ehldev@gmail.com",
        password: "secret",
        tipoInicio: 1,
      },
    },
  }); */

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const loginAction = () => {
    login({
      variables: {
        loginInput: {
          email: "ehldev@gmail.com",
          password: "secret",
          tipoInicio: 1,
        },
      },

      optimisticResponse: true,
    });
  };

  console.log(data);

  return (
    <form onSubmit={loginAction}>
      <div className="form-group">
        <input type="email" placeholder="Correo" className="form-control" />
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
    </form>
  );
}
