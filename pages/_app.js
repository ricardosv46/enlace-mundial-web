import Script from "next/script";

import "../styles/globals.css";

import "../styles/scss/app.scss";

import "react-datepicker/dist/react-datepicker.css";

import "swiper/swiper.scss";

import Header from "../components/header/index";
import Footer from "../components/footer/index";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />

      <Component {...pageProps} />

      <Footer />

      <Script
        src="https://kit.fontawesome.com/3bd84f9f96.js"
        crossorigin="anonymous"
      />
    </div>
  );
}

export default MyApp;
