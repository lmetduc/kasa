import Banner from "../../components/Banner/Banner";
import banner from "../../assets/banner2.png";
import "./About.css";
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import { accordionData } from "../../utils/content";

export default function About() {
  return (
    <div>
      <Banner banner={banner} />
      <div>
        <div className="accordion">
          {accordionData.map(({ title, content }, i) => (
            <Accordion title={title} content={content} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
