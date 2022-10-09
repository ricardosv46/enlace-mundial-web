import { useQuery, useLazyQuery } from '@apollo/client'
import request from 'graphql-request'
import { useState } from 'react'
import { URL } from '../endpoints y url/endpoints'
import { GET_CATEGORIA_CRUCERO } from '../graphql/queries/GetCategoriaCrucero'


export const GestionCategoriaCrucero = () => {
    const [loading, setLoading] = useState(false)

    const FuncionGetCategoriaCrucero = async (SlugFilter, setDataCrucero) => {
        setLoading(true)
        await request(URL, GET_CATEGORIA_CRUCERO, {
            numberPaginate: 10,
            page: 1,
            estadoCrucero: "Activado",
            slugCategoria: SlugFilter,
        }
        ).then(async (res) => {
            let data = await res?.GetCategoriaCrucero?.data
            setDataCrucero(data)
            setLoading(false)

        }).catch(async (err) => {
            console.log(err)
            setDataCrucero([])
            setLoading(false)

        }
        )


    }

    return { FuncionGetCategoriaCrucero, loading }

}