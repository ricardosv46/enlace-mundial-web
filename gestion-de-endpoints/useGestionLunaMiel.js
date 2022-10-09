import { useQuery, useLazyQuery } from '@apollo/client'
import request from 'graphql-request'
import { useState } from 'react'
import { URL } from '../endpoints y url/endpoints'
import { GET_ALL_LUNA_MIEL } from '../graphql/queries/GetAllLunaMiel'


export const useGestionGetAllLunaMiel = () => {
    const [loading, setLoading] = useState(false)

    const FuncionGetAllLunaMiel = async (setDataLunaMiel) => {
        setLoading(true)
        await request(URL, GET_ALL_LUNA_MIEL, {
            numberPaginate: 10,
            page: 1,
            estadoLuna: "Activado",
        }
        ).then(async (res) => {
            let data = await res?.GetAllLunaMiel?.data
            setDataLunaMiel(data)
            setLoading(false)
        }).catch(async (err) => {
            console.log(err)
            setDataLunaMiel([])
            setLoading(false)
        }
        )


    }

    return { FuncionGetAllLunaMiel, loading }

}