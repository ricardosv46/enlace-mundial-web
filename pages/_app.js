import Head from "next/script"
import Script from "next/script"

import "../styles/globals.css"

import "../styles/scss/app.scss"

import "react-datepicker/dist/react-datepicker.css"

import "swiper/swiper.scss"

import Header from "../components/header/index"
import Footer from "../components/footer/index"

import { ApolloProvider } from "@apollo/client"
import client from "../apollo"
import { ContextAuth } from "../context/ContextAuth"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(false)
  const [dataUser, setDataUser] = useState({})

  useEffect(() => {
    if (localStorage) {
      const data = JSON.parse(localStorage.getItem("usuario"))
      setDataUser(data)
      if (data) {
        setAuth(true)
      }
    }
  }, [])

  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>

      <ApolloProvider client={client}>
        <ContextAuth.Provider value={{ auth, setAuth, dataUser, setDataUser }}>
          <Header />

          <Component {...pageProps} />

          <Footer />
        </ContextAuth.Provider>
      </ApolloProvider>

      <Script
        src='https://kit.fontawesome.com/3bd84f9f96.js'
        crossorigin='anonymous'
      />
    </div>
  )
}

export default MyApp
