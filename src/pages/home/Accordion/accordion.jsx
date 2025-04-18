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
        className={`flex items-center justify-between py-6 cursor-pointer border-t border-[#A7A7A7]`}
        onClick={toggleAccordion}
      >
        <p className="font-semibold text-[32px] text-black leading-[100%]">{props.title}</p>
        <div className="w-10 h-10 flex items-center justify-center border-2 rounded-full border-[#0C0B0B]">
          <MoveDown size={20} strokeWidth={2.5} />
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
