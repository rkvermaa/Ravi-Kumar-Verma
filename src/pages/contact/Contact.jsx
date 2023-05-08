import React from 'react';

import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaLinkedinIn, 
    FaGithub,  
    FaTwitter,
    FaYoutube,
    FaDribbble,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import "./contact.css"

const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In<span>Touch Me</span>
            </h2>
            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Don't be shy !</h3>
                    <p className="contact__description">
                        feel free to be in touch 
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className='info__icon' />

                            <div>
                                <span className="info__title">Mail Me</span>
                                <h4 className="info__desc">rkverma87@gmail.com</h4>
                            </div>
                        </div>
                        <div className="info__item">
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className="info__title">Call Me</span>
                                <h4 className="info__desc">+91 7409210692</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://www.facebook.com/ravi.k.verma.7/" className="contact__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="https://twitter.com/rkv87" className="contact__social-link">
                            <FaTwitter />
                        </a>

                        <a href="https://www.linkedin.com/in/ravi-kumar-verma-16837734/" className="contact__social-link">
                            <FaLinkedinIn/>
                        </a>

                        <a href="https://github.com/rkvermaa" className="contact__social-link">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                <form className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input 
                                type="text" 
                                placeholder='Your Name'
                                className="form__control" 
                            />
                        </div>

                        <div className="form__input-div">
                            <input 
                                type="email" 
                                placeholder='Your Email'
                                className="form__control" 
                            />
                        </div>

                        <div className="form__input-div">
                            <input 
                                type="text" 
                                placeholder='Your subject'
                                className="form__control" 
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea 
                            placeholder='Your Message' 
                            className='form__control textarea'>
                        </textarea>
                    </div>

                    <bitton className="button">
                        Send Message
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </bitton>
                </form>
            </div>
        </section>
    );
};

export default Contact;