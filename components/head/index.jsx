import React from 'react'
import Head from "next/head"
import { useScreenContext } from '../../context/screen'
export const NextHead = () => {
    const { Screen } = useScreenContext()
    //     IsDark: false
    // SubTittle: ""
    // tittle: "Enlace Mundial"
    return (
        <Head>
            {/* <title> {`${Screen.SubTittle}` || null}{Screen.tittle}</title> */}
            <title> {Screen.SubTittle ? `${Screen.SubTittle} - `: null}{Screen.tittle}</title>

            <meta name='description' content='Enlace mundial' />

            {/* <link rel='icon' href='/icon2.png' /> */}
            <link rel='icon' href='/ico.ico' />

            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
            />
        </Head>
    )
}