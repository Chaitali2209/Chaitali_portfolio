import React from 'react';
import './Projects.css';
import Ecom from '../../assets/images/ecom.jpg';
import Blog from '../../assets/images/bolt.jpg';
import Next_Ec from '../../assets/images/next_ec.jpg';
import Social from '../../assets/images/social.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper';

const Projects = () => {
    const data=[
        {
            src:Ecom,
            url:"#!",
            title:"Grocery Mart App"
        },
        {
            src:Blog,
            url:"#!",
            title:"Bolt"
        },
        {
            src:Next_Ec,
            url:"#!",
            title:"Driver Drowsiness Detection"
        },
        {
            src:Social,
            url:"#!",
            title:"Portfolio"
        },
    ]

    // const pro_name = [
    //     {
    //         title:"Grocery Mart App"
    //     },
    //     {
    //         title:"Bolt"
    //     },
    //     {
    //         title:"Driver Drowsiness Detection"
    //     },
    //     {
    //         title:"Portfolio"
    //     }
    // ]
  return (
    <section id="projects" data-aos="fade">
        <div className='poject-heading'>
            <h3>Recent Projects</h3>
        </div>

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
            data.map(project=>(
                <SwiperSlide key={project.src}>
                    <div className='project-box'>
                    <a href={project.src}>
                        <img src={project.src} alt='project'/>
                        <div className='p-overlayer'>
                            {/* {<strong>Grocery Mart App</strong> */
                                // project.title.map(title=>(
                                // <strong key={title}>{project.title}</strong>
                                // ))
                            }
                            
                        </div>
                    </a>
                </div>
                </SwiperSlide>
            ))
        }
        
        
      </Swiper>

        

        <div className='github-btn' data-aos="fade">
            <a href='https://github.com/Chaitali2209' className='btn-link'>
                My Github <i class="fa-brands fa-github"></i>
            </a>
        </div>

    </section>
  )
}

export default Projects
