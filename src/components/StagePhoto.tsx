import React from 'react';
import footerImg from '../assets/Footer.jpg';
import './StagePhoto.css';

const StagePhoto: React.FC = () => {
  return (
    <div className="stage-photo" aria-hidden="true">
      <img src={footerImg} alt="Veto Quartet performing on stage" />
    </div>
  );
};

export default StagePhoto;
