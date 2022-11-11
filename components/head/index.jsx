import React from 'react'
import Head from 'next/head'
import { useScreenContext } from '../../context/screen'
export const NextHead = () => {
  const { Screen } = useScreenContext()
  //     IsDark: false
  // SubTittle: ""
  // tittle: "Enlace Mundial"

  const subTittle = Screen.SubTittle ? `${Screen.SubTittle} - ` : ''

  return (
    <Head>
      {/* <title> {`${Screen.SubTittle}` || null}{Screen.tittle}</title> */}
      <title>
        {subTittle}
        {Screen.tittle}
      </title>

      {/* <link rel='icon' href='/icon2.png' /> */}
      <link rel='icon' href='/ico.ico' />

      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css' />
    </Head>
  )
}
