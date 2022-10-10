import Script from "next/script"
import "nprogress/nprogress.css";

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
import Facebook from "../components/facebook"
import { ScreenProvider } from '../context/screen/providers'
import { NextHead } from '../components/head'
import Router from "next/router";
import NProgress from "nprogress"


function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(false)
  const [dataUser, setDataUser] = useState({})
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (localStorage) {
      const data = JSON.parse(localStorage.getItem("usuario"))
      setDataUser(data)
      if (data) {
        setAuth(true)
      }
    }
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'none';
    }
  }, []);
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <div>
      {/* <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head> */}
      <Facebook />

      <ApolloProvider client={client}>
        <ScreenProvider>
          <ContextAuth.Provider
            value={{ auth, setAuth, dataUser, setDataUser, show, setShow }}
          >
            <NextHead />
            <Header />

            <Component {...pageProps} />

            <Footer />
          </ContextAuth.Provider>
        </ScreenProvider>
      </ApolloProvider>

      <Script
        crossorigin='anonymous'
        src='https://kit.fontawesome.com/3bd84f9f96.js'
      />
    </div>

  )
}

export default MyApp
