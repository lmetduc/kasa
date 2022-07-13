import Banner from "./Banner";
import banner from "../assets/banner2.png";
import "../styles/About.css";
import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "../utils/content";

export default function About() {
  return (
    <div>
      <Banner banner={banner} />
      <div>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}
