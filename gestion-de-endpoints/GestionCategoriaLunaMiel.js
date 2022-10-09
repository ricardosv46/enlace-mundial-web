import request from 'graphql-request'
import { useState } from 'react'
import { URL } from '../endpoints y url/endpoints'
import { GET_CATEGORIA_LUNAMIEL } from '../graphql/queries/GetCategoriaLunaMiel'



export const GestionCategoriaLunaMiel = () => {
    const [loading, setLoading] = useState(false)

    const FuncionGetCategoriaLunaMiel = async (SlugFilter, setDataLunaMiel) => {
        setLoading(true)
        await request(URL, GET_CATEGORIA_LUNAMIEL, {
            numberPaginate: 10,
            page: 1,
            estadoLuna: "Activado",
            slugCategoria: SlugFilter,
        }
        ).then(async (res) => {
            let data = await res?.GetCategoriaLunaMiel?.data
            setDataLunaMiel(data)
            setLoading(false)

        }).catch(async (err) => {
            console.log(err)
            setDataLunaMiel([])
            setLoading(false)

        }
        )


    }

    return { FuncionGetCategoriaLunaMiel, loading }

}