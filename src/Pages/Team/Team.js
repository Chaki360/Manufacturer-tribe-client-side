import React from 'react';
import './Team.css'
import { AiOutlineTwitter, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
const Team = () => {
    return (
        <section>

            <div className='team-info justify-items-center'>
                <div className='team-box'>
                    <img className='w-72 rounded-xl' src='https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
                    <h3 className='font-bold text-lg text-center'>Steven Rollins</h3>
                    <h4 className='text-center'>Officer</h4>
                    <div className='social-icons '>
                        <a href='/'><AiOutlineTwitter /></a>
                        <a href='/'><AiFillLinkedin /></a>
                        <a href='/'><AiFillFacebook /></a>

                    </div>
                </div>



            </div>
        </section>
    );
};

export default Team;