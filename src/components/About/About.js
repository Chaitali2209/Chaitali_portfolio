import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id='about'>
        <div className='about-container'>
            <div className='about-heading'data-aos="flip-left">
                <strong>About Me</strong>
                <h3>The best way to predict future is to invent it!</h3>
                <a href='mailto:chaitalipadalkar2002@gmail.com' className='btn-link'>
                    Email
                    <i class="fa-solid fa-envelope"></i>
                </a><br></br><br></br>
                <a href='https://www.linkedin.com/in/chaitali-padalkar-61b589230/' className='btn-link linkedin'>
                    Chaitali Padalkar - Linkedin
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>

            <div className='about-details'data-aos="flip-right">
                <p>Hey...This is Chaitali, a passionate and creative coder and software developer who is currently pursuing B.E. in Information Technology at Bharati Vidyapeeth Colleg eof Engineering, Navi Mumbai. </p>
                <p>What excites me most about working in software development is being able to design and create things that have purpose and solve real problems. Leaning into project research and insight, finding the right problems to solve, delivering that value as quickly as possible, learning from it and then iterating and improving that value over time is the key to great design.</p>
            </div>

        </div>
    </section>
  )
}

export default About
