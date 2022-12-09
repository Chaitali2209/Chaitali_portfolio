
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <span>
            Copyright &copy; 2022
        </span>

        <div className='social-links'>
            <a href='https://www.linkedin.com/in/chaitali-padalkar-61b589230/'>
                <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href='#!'>
            <i class="fa-brands fa-facebook"></i>
            </a>

            <a href='#!'>
            <i class="fa-brands fa-youtube"></i>
            </a>
        </div>

        <a href='#!' className='footer-logo'>Chaitali Padalkar</a>
    </footer>
  )
}

export default Footer
