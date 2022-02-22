import { useMutation, useQuery } from "@apollo/client"
import { CREATE_USUARIO } from "../graphql/mutation/CrearUsuario"
import { LOGIN_USUARIO } from "../graphql/mutation/LoginUsuario"
import { UPDATE_USUARIO } from "../graphql/mutation/UpdateUser"
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

    if (res.data?.login) {
      localStorage.setItem("token", res.data?.login?.apiToken)
      localStorage.setItem("usuario", JSON.stringify(res.data?.login))

      return "exito"
    }
  }

  const [UpdateUsuario] = useMutation(UPDATE_USUARIO, {
    onError: (err) => {
      console.log("onError Update Usuario", err?.graphQLErrors[0]?.debugMessage)
    },
  })

  const updateUsuario = async ({
    tipoDocumento,
    numDocumento,
    celular,
    tipoUsuario,
    nombre,
    apellidos,
    email,
    estado,
    userId,
  }) => {
    const resp = await UpdateUsuario({
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
          userId: userId,
        },
      },
    })
    console.log("UpdateUsuario", resp)

    if (resp.data?.UpdateUsuario) {
      localStorage.setItem("usuario", JSON.stringify(resp.data?.UpdateUsuario))
      return "exito"
    }
  }

  return {
    loadingLogin,
    loadingCreate,
    loginUsuario,
    createUsuario,
    updateUsuario,
  }
}
