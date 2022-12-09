import React from 'react';
import './Career.css';
import CV from '../../assets/cv/cv.pdf';

const Career = () => {
  const careers=[
    {
      title:"Web Developer",
      name:"Software",
      year:" "
    },
    {
      title:"Flutter App Development",
      name:"Software - SIH",
      year:"2022-2023"
    }
  ]

  const educations=[
    {
      title:"Bachelor of Engineering",

      name:"Information Technology",
      year:"2020-2024"
    },
    {
      title:"Front-end Developer",
      name:"Software",
      year:"2022-2023"
    }
  ]
  return (
    <section id="career">
      <div className='career-education'>
        <div className='career' data-aos="fade-right">
          <h3>Career</h3>

          <div className='c-b-container'>
            {
              careers.map((career,index)=>(
                <div className='c-box' key={index}>
                  <h4>{career.title}</h4>
                  <strong>{career.name}</strong>
                  <span>{career.year}</span>
                </div>
              ))
            }
          </div>
        </div>

        <div className='career edu'data-aos="fade-left">
          <h3>Education</h3>

          <div className='c-b-container'>
            {
              educations.map((career,index)=>(
                <div className='c-box' key={index}>
                  <h4>{career.title}</h4>
                  <strong>{career.name}</strong>
                  <span>{career.year}</span>
                </div>
              ))
            }
          </div>
        </div>

        
      </div>

      <div className='btn-c' data-aos="fade-up">
          <a href={CV} download className='btn-link'>
            GET CV <i class="fa-solid fa-download"></i>
            </a>
        </div>
        
    </section>
  )
}

export default Career
