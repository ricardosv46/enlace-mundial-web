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
    </div>
  );
}

export default MyApp;
