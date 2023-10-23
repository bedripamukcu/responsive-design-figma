import "./Topics.css";
import rectangle13 from "../../assets/Rectangle13.png";
import rectangle14 from "../../assets/Rectangle14.png";
import rectangle15 from "../../assets/Rectangle15.png";
import rectangle16 from "../../assets/Rectangle16.png";
import rectangle17 from "../../assets/Rectangle17.png";
import rectangle18 from "../../assets/Rectangle18.png";
import { useState } from "react";
import group7 from "../../assets/Group7.svg";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(rectangle13);

  return (
    <section className="blacks" id="topics">
      <div className="wrapper">
        <h2> What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(rectangle13)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(rectangle14)}>Using Daw</li>
            <li onMouseEnter={() => setCurrentImage(rectangle15)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(rectangle16)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(rectangle17)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(rectangle18)}>Mastering</li>
          </ul>

          <div className="topic-image">
            <img src={currentImage} alt="description" />
          </div>
        </div>
        <img src={group7} className="group7" />
      </div>
    </section>
  );
};

export default Topics;
