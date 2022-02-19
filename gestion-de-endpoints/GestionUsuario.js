import { useMutation, useQuery } from "@apollo/client"
import { CREATE_USUARIO } from "../graphql/mutation/CrearUsuario"
import { LOGIN_USUARIO } from "../graphql/mutation/LoginUsuario"

// Obtenemos todas las categorias
export const GestionUsuario = () => {
  const [CreateUsuario, { loading: loadingCreate }] = useMutation(
    CREATE_USUARIO,
    {
      onError: (err) => {
        console.log(
          "onError Create Usuario",
          err?.graphQLErrors[0]?.debugMessage
        )
      },
    }
  )

  const createUsuario = async ({
    tipoDocumento,
    numDocumento,
    celular,
    tipoUsuario,
    nombre,
    apellidos,
    email,
    estado,
    password,
  }) => {
    const resp = await CreateUsuario({
      variables: {
        input: {
          tipoDocumento: tipoDocumento,
          numDocumento: numDocumento,
          celular: celular,
          tipoUsuario: tipoUsuario,
          nombre: nombre,
          apellidos: apellidos,
          email: email,
          estado: estado,
          password: password,
        },
      },
    })
    console.log("CreateUsuario", resp)

    if (resp.data?.CrearUsuario) return "exito"
  }

  const [LoginUsuario, { loading: loadingLogin }] = useMutation(LOGIN_USUARIO, {
    onError: (err) => {
      console.log("onError Login Usuario", err?.graphQLErrors[0]?.debugMessage)
    },
  })

  const loginUsuario = async ({ email, password }) => {
    const res = await LoginUsuario({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    })
    console.log("LoginUsuario", res)

    const Usuario = res.data?.login

    localStorage.setItem("usuario", JSON.stringify(Usuario))

    if (res.data?.login) return "exito"
  }

  return {
    loadingLogin,
    loadingCreate,
    loginUsuario,
    createUsuario,
  }
}
