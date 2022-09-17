import React from "react"
import Script from "next/script"
import Document, { Html, Head, Main, NextScript } from "next/document"
import Facebook from "../components/facebook"
import Loader from '../components/loader'

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
          <style>{Loader}</style>
        </head>
        <body>
          <div id={'globalLoader'}>
            <div className="loader">
              <div />
              <div />
            </div>
          </div>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
