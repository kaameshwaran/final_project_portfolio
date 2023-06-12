import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Send a request for personalised service 
        </p>
        <p className='footer-subscription-text'>
          made just for you!
        </p>
        <div className='input-areas-1'>
          <form>
            <input
              className='footer-input'
              name='name'
              type='name'
              placeholder='Name'
            />
          </form>
          <form>
            <input
              className='footer-input'
              name='mobile number'
              type='text'
              placeholder='Mobile'
            />
          </form>
          </div>
          <div className='input-areas-2'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            MY PORTFOLIO
            <i class="fa-solid fa-earth-americas"></i>
            </Link>
          </div>
          <small class='website-rights'>Kaameshwaran © 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href={"https://github.com/kaameshwaran"}
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href={"https://www.linkedin.com/in/kaameshwaran-v-b38442225/"}
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link instagram'
              href={"https://instagram.com/"}
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href={'https://twitter.com/'}
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
