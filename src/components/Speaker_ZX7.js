import React from 'react';
import { scrollToTop } from '../utils/helpers';
import Button from './Button';
import './Speaker_ZX7.scss';
import speaker_mobile from '../assets/home/mobile/image-speaker-zx7.jpg';
import speaker_tablet from '../assets/home/tablet/image-speaker-zx7.jpg';
import speaker_desktop from '../assets/home/desktop/image-speaker-zx7.jpg';

const Speaker_ZX7 = () => {
  const width = window.innerWidth;
  return (
    <div className="speaker-zx7"
      style={
        width >= 1280
          ? { backgroundImage: `url(${speaker_desktop})` }
          : width >= 768
          ? { backgroundImage: `url(${speaker_tablet})` }
          : { backgroundImage: `url(${speaker_mobile})` }
      }
    >
      <h1>ZX7 SPEAKER</h1>
      <Button link='/product/5' cName='btn-3' innerText='SEE PRODUCT' onClick={scrollToTop} />
    </div>
  );
};

export default Speaker_ZX7;