import React from "react";
import Header from "../../components/header";
import Hero from "./hero";
import About from "./about";
import Teachers from "./teachers";
import Courses from "./courses";
import Community from "./community";
import Comments from "./comments";

export default function HomePage() {
  return (
    <>
      <div>
        <Header />
        <main className="flex flex-col gap-20">
          <Hero />
          <About />
          <Teachers />
          <Courses />
          <Community />
          <Comments />
        </main>
      </div>
    </>
  );
}
