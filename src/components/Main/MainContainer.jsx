import React from "react";
import Hero from "./Hero";
import NewPosts from "./NewPosts";
import "../../sass/main/main.scss";

function MainContainer() {
  return (
    <main className="mainContainer">
      <Hero />
      <NewPosts />
    </main>
  );
}

export default MainContainer;
