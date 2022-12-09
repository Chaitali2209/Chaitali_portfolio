import React from 'react';
import './Summery.css';
import CV from '../../assets/cv/cv.pdf';

const Summery = () => {
  return (
    <section id='summery'>
      <div className='summery-heading' data-aos="fade-right">
        <strong>My Skillset</strong>
        <h2>Computer programmer skills often combine creativity with technical and analytical elements. </h2>

        <a href={CV} download className='btn-link'>
            Get CV <i className="fa-solid fa-download"></i>

        </a>

      </div>

      <div className='summery-details' data-aos="fade-left">
      I'm obsessed with making things and even more obsessed with making things better. I find myself acquainted with skills such as:
      <li>
        HTML
      </li>
      <li>
        CSS
      </li>
      <li>
        JavaScript
      </li>
      <li>
        React
      </li>
      <li>
        Node
      </li>
      <li>
        Python
      </li>
      <li>
        Data Structures
      </li>
      <li>
        A Creative problem Solver and programmer
      </li>
      </div>
    </section>
  )
}

export default Summery
