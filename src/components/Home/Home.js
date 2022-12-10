import React from 'react';
import './Home.css';
import Avatar from '../../assets/images/avatar.jpg';

const Home = () => {
  return (
    <section id = 'home'>
        <div className='home-text' data-aos="fade-down">
            <strong>Hello, it's me</strong>
            <br/>
            <h1>Chaitali Padalkar</h1>
            <p>A dream that turned into reality, that took sweat, determination, hard work, and 36 hours of rigorous coding.🔥

It gives me immense pleasure to share that our team Bolt-VPASC has Won 𝐒𝐦𝐚𝐫𝐭 𝐈𝐧𝐝𝐢𝐚 𝐇𝐚𝐜𝐤𝐚𝐭𝐡𝐨𝐧 (𝐒𝐈𝐇-2022). 🥳

A journey from our city that took hours to reach the nodal center, to the one that paved the way for new experiences and learning in our life.💫
 
A problem statement given by DRDO Organization ‘Develop a system to enable Speed reading based on Mindfulness meditation’ that invoked an idea in our minds to create an effective, and reliable solution for this problem lead to an amazing journey named as SIH 2022.🤩</p>
            <a href='#summery' className='btn-link'>Scroll for me</a>
        </div>

        <div className='home-img' data-aos="fade-up">
            <div className='img-box' >
                <img src={Avatar} alt='Avatar'/>

                <h2>Chaitali Padalkar<br/> <span> Front-end and App Developer</span></h2>

                <div className='social'>
                  <a href='https://www.linkedin.com/in/chaitali-padalkar-61b589230/'>
                    <i class="fa-brands fa-linkedin"></i>
                  </a>

                  <a href='https://github.com/Chaitali2209'>
                    <i class="fa-brands fa-github"></i>
                  </a>
                

                  
                </div>
                <a href='#!' className='hire-me'>Hire Me</a>
            </div>
        </div>
    </section>
  )
}

export default Home
