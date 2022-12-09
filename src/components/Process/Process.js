import React from 'react';
import './Process.css';

const Process = () => {
    const data= [
        {
            id:"01",
            title:"Grocery Mart App",
            contents:["An online grocery Application","Developed using Java","Database using MySQL"]
        },
        {
            id:"02",
            title:"Yanta App",
            contents:["Driver Drowsiness Detection System","Developed in Python","Database in MySQL"]
        },
        {
            id:"03",
            title:"E-commerce portal(Sponsored Project)",
            contents:["E-commerce Web Application","Developed using MERN","Backend using Node"]
        },
        {
            id:"04",
            title:"BOLT APP - a solution to SIH Problem Statement",
            contents:["A speed reading Application","Developed Frontend using Flutter","Backend using Django"]
        },
        {
            id:"05",
            title:"Crossby Web Application",
            contents:["An online plant nursery web application","Developed using HTML, CSS and Javascript"]
        },
        {
            id:"06",
            title:"Lab-project",
            contents:["An application for LAB attendance","Developed Frontend in Flutter"]
        }
    ]
  return (
    <section id='process'>
        <div className='process-heading' data-aos="fade-right">
            <h3>Work</h3>
        </div>

        <div className='process-container' data-aos="fade-left">
            {
                data.map(process=>(
                    <div className='process-box' key={process.id}>
                        <span>{process.id}</span>
                        <strong>
                            {process.title}
                        </strong>
                        <ul>
                            {
                                process.contents.map(content=>(
                                    <li key={content}>{content}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Process
