import React from 'react'
import Script from 'next/script'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Facebook from '../components/facebook'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es-ES">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.fbAsyncInit = function () {
                FB.init({
                  xfbml: true,
                  version: 'v11.0'
                })
              }
            `
            }}
          />

          <script
            id="facebook-jssdk"
            src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
          />
        </Head>
        <body>
          <div id="fb-root" />
          <div
            attribution="biz_inbox"
            page_id="101774235552574"
            className="fb_customer_chat"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
