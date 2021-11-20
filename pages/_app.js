import Head from "next/script";
import Script from "next/script";

import "../styles/globals.css";

import "../styles/scss/app.scss";

import "react-datepicker/dist/react-datepicker.css";

import "swiper/swiper.scss";

import Header from "../components/header/index";
import Footer from "../components/footer/index";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
        />
      </Head>

      <ApolloProvider client={client}>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </ApolloProvider>

      <Script
        src="https://kit.fontawesome.com/3bd84f9f96.js"
        crossorigin="anonymous"
      />
    </div>
  );
}

export default MyApp;
