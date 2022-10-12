import React from "react"
import Script from "next/script"
import Document, { Html, Head, Main, NextScript } from "next/document"
import Facebook from "../components/facebook"
import Loader from '../components/loader'
import { PaperPlane } from '../lotties/components/PaperPlane'
import { AirPlane } from "../components/loader/componentes/air-plane"
class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }


  render() {
    return (
      <Html lang='es-ES'>
        <Head />
        <head>
          {/* <link rel="stylesheet" href="styles/global.css" type="text/css" /> */}
          <style>{Loader}</style>
        </head>
        <body>
          {/* Loader avioncito verde  */}
          <AirPlane />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
