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

      <meta name='description' content={Screen.description} />

      {/* <link rel='icon' href='/icon2.png' /> */}
      <link rel='icon' href='/ico.ico' />

      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css' />

      <meta name='keywords' content={Screen.keywords} />
      <meta property='og:site_name' content={`${subTittle}${Screen.tittle}`} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={`${subTittle}${Screen.tittle}`} />
      <meta property='og:description' content={Screen.description} />
      <meta property='og:url' content={Screen.url} />
      <meta property='og:image' content={Screen.img} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='660' />
      {/* <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='300' /> */}

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={`${subTittle}${Screen.tittle}`} />
      <meta name='twitter:description' content={Screen.description} />
      <meta property='twitter:url' content={Screen.url} />
      <meta name='twitter:image' content={Screen.img} />
    </Head>
  )
}
