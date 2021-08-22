import React from "react";
import Script from "next/script";

// Components
import Header from "../components/header/index";
import Footer from "../components/footer/index";

export default function Home() {
  return (
    <div>
      <main>
        <Header />

        <Footer />
      </main>

      <Script
        src="https://kit.fontawesome.com/3bd84f9f96.js"
        crossorigin="anonymous"
      />
    </div>
  );
}
