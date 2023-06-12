import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>MY PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ytimg.com/vi/I0v9ZOY3_0k/maxresdefault.jpg'
              text='A Random Quote Generator with social media sharing feature'
              label='HTML/CSS/JS'
              path='https://random-quote-levi.netlify.app/'
            />
            <CardItem
              src='https://i.pinimg.com/736x/06/ba/75/06ba750b35226b0bef4df3279dfd4fa1--awesome-stuff-classic.jpg'
              text='Dynamic rendering Clock'
              label='React.js'
              path='https://kaameshwaran.github.io/Dynamic-clock/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ytimg.com/vi/p6CK049K99c/maxresdefault.jpg'
              text='Weather App with dynamic background rendering'
              label='HTML/CSS/JS'
              path='https://kaameshwaran.github.io/weather-app/'
            />
            <CardItem
              src='https://jschris.com/262a1fab0110d0d612ed69c9bb7c4e7e/project.gif'
              text='Interactive Quiz App'
              label='React.js'
              path='https://kaameshwaran.github.io/Quizer/'
            />
            <CardItem
              src='https://i.imgur.com/Mk3DTFN.jpg'
              text='Calculator'
              label='React.js'
              path='https://kaameshwaran.github.io/Calculator/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
