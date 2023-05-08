import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css'


const Home = () => {
    return (
       <section className='home section grid'>
        <img src={Profile} alt='' className='home__img' />

        <div className='home__content'>
            <div className='home__data'>
                <h1 className='home__title'>
                    <span>I'm Ravi Verma.</span> Data Scientist
                </h1>
                <p className='home__description'>
                An enthusiast data scientist passionate about data and its potential to drive insights and create
                value. I am constantly seeking to learn more about new techniques, tools, and applications of 
                data science. I enjoy working with data, whether it’s cleaning and processing it, analyzing it, 
                or visualizing it in creative ways. I am always look for new and interesting problems to solve with data, 
                and am excited by the prospect of making a meaningful impact through their work

                </p>
                <Link to='/about' className='button'>
                    More About Me{' '} 
                    <span className='button__icon'>
                        <FaArrowRight />
                    </span>
                </Link>
            </div>
        </div>

        <div className="color__block"></div>
       </section> 
    );
};

export default Home;