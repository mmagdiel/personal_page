import React from "react";
import { Parallax } from "@react-spring/parallax";
import { Layout } from "../core";
import { Hero, Projects, About, Contact } from "../sections";

function Home() {
  return (
    <Layout>
      <Parallax pages={5}>
        <Hero offset={0} factor={1} />
        <Projects offset={1} factor={2} />
        <About offset={3} factor={1} />
        <Contact offset={4} factor={1} />
      </Parallax>
    </Layout>
  );
}

export default Home;
