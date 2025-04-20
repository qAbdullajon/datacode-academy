import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { MoveDown } from "lucide-react";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`flex items-center justify-between gap-2 py-2 lg:py-6 cursor-pointer border-t border-[#A7A7A7]`}
        onClick={toggleAccordion}
      >
        <p className="font-semibold text-sm md:text-2xl lg:text-[32px] text-black leading-[100%]">{props.title}</p>
        <div className="w-4 md:w-10 h-4 min-w-4 md:h-10 flex items-center justify-center border md:border-2 rounded-full border-[#0C0B0B]">
          <MoveDown className="w-2 md:w-4" strokeWidth={2.5} />
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="text-[12px] md:text-base lg:text-lg font-normal pb-4"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
