import React from "react";
import NavBar from "../components/NavBar";
import ScrollBar from "../components/ScrollBar";
import FooterPage from "../components/FooterPage";

export default function About() {
  return (
    <div>
      <NavBar></NavBar>
      <ScrollBar></ScrollBar>
      <div>
        <h1>ABOUT US</h1>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
}
