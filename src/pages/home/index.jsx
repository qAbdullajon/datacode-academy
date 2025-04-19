import React from "react";
import Header from "../../components/header";
import Hero from "./hero";
import About from "./about";
import Teachers from "./teachers";
import Courses from "./courses";
import Community from "./community";
import Comments from "./comments";
import Contact from "./contact";
import AccordionSection from "./Accordion";
import Footer from "../../components/footer";

export default function HomePage() {
  return (
    <>
      <div>
        <Header />
        <main className="flex flex-col gap-[60px] lg:gap-20 pt-2 pb-20 mt-[78px]">
          <Hero />
          <About />
          <Teachers />
          {/* <Courses />
          <Community />
          <Comments />
          <Contact /> 
          <AccordionSection /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
