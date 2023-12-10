import React from "react";

import Technologies from "./components/Technologies";
import Worlks from "./components/Worlks/main";
import Main from "./components/Main";
import Footer from "./components/Footer";

import './styles/global.sass'

export default function Home() {
  return (
    <div>
      <Main />
      <Technologies />
      <Worlks />
      <Footer />
    </div>
  );
}
