import React from "react";
import "./Speaker_ZX9.scss";
import Button from "./Button";
import { scrollToTop } from "../utils/helpers";
import speaker_mobile from "../assets/home/mobile/image-speaker-zx9.png";
import speaker_tablet from "../assets/home/tablet/image-speaker-zx9.png";
import speaker_desktop from "../assets/home/desktop/image-speaker-zx9.png";

const Speaker_ZX9 = () => {
  const width = window.innerWidth;
  return (
    <div className="speaker-zx9">
      <img
        src={`${
          width >= 1280
            ? speaker_desktop
            : width >= 768
            ? speaker_tablet
            : speaker_mobile
        }`}
        alt="speaker"
      />
      <div className="inner-text">
        <h3>ZX9 SPEAKER</h3>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          link="/product/6"
          cName="btn-2"
          onClick={scrollToTop}
          innerText="SEE PRODUCT"
        />
      </div>
    </div>
  );
};

export default Speaker_ZX9;
