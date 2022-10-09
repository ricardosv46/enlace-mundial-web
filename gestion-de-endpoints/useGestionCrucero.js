import { useQuery, useLazyQuery } from '@apollo/client'
import request from 'graphql-request'
import { useState } from 'react'
import { URL } from '../endpoints y url/endpoints'
import { GET_ALL_CRUCERO } from '../graphql/queries/getAllCrucero'


export const useGestionGetAllCrucero = () => {
    const [loading, setLoading] = useState(false)

    const FuncionGetAllCrucero = async (setDataCrucero) => {
        setLoading(true)
        await request(URL, GET_ALL_CRUCERO, {
            numberPaginate: 10,
            page: 1,
            estadoCrucero: "Activado",
        }
        ).then(async (res) => {
            setLoading(false)
            let data = await res?.GetAllCrucero?.data
            setDataCrucero(data)

        }).catch(async (err) => {
            console.log(err)
            setDataCrucero([])
            setLoading(false)

        }
        )


    }

    return { FuncionGetAllCrucero, loading }

}