import React from "react";
import Accordion from "./accordion";

export default function AccordionSection() {
  return (
    <div className="container">
      <p className="font-semibold text-[40px] leading-[150%] text-center pb-10">
        Ko’p so’raladigan{" "}
        <span className="text-[#D32F2E] italic">savollar</span>
      </p>
      <div className="max-w-[970px] mx-auto">
        <Accordion
          title="Oflayn kurslar bormi"
          content={`
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quidem. Error possimus beatae dolores, atque itaque maiores
              voluptate corporis dolore tempora omnis aperiam quis provident
              repudiandae? At recusandae sequi ipsum?
          `}
        />
        <Accordion
          title="Ingliz tilini qay darajada bilishim kerak"
          content={`
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quidem. Error possimus beatae dolores, atque itaque maiores
              voluptate corporis dolore tempora omnis aperiam quis provident
              repudiandae? At recusandae sequi ipsum?
          `}
        />
        <Accordion
          title="Qanday noutbuk bo’lishi kerak"
          content={`
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quidem. Error possimus beatae dolores, atque itaque maiores
              voluptate corporis dolore tempora omnis aperiam quis provident
              repudiandae? At recusandae sequi ipsum?
          `}
        />
        <Accordion
          title="Guruhlar qachon ochiladi"
          content={`
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quidem. Error possimus beatae dolores, atque itaque maiores
              voluptate corporis dolore tempora omnis aperiam quis provident
              repudiandae? At recusandae sequi ipsum?
          `}
        />
        <Accordion
          title="Qanday bog’lansam bo’ladi, savolim bor edi"
          content={`
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quidem. Error possimus beatae dolores, atque itaque maiores
              voluptate corporis dolore tempora omnis aperiam quis provident
              repudiandae? At recusandae sequi ipsum?
          `}
        />
      </div>
    </div>
  );
}
