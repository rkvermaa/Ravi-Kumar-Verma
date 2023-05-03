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
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries,

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