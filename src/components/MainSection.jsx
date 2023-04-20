import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  const onButtonClick = () => {
    fetch('Kaameshwaran_V_resume_.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Kaameshwaran_V_resume_.pdf';
            alink.click();
        })
    })
}
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Hello!</h1>
      <p>I'm Kaameshwaran</p>
      <p>a Junior Web Developer</p>
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={onButtonClick}
        >
          MY RESUME
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        <i className='fa-solid fa-phone' />  HIRE ME
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
