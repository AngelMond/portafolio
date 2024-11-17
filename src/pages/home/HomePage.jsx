import React, { Component } from 'react';
import photo from '../../images/my-photo.jpg';

export const HomePage = () => {
    return (
        <section className='container'>
            <article className='section-border row d-flex flex-wrap homePage mt-5 p-4 shadow  align-items-center'>
                <div className='col'>
                    <h2 className='display-1 text-center section-headings'>Hi, I'm Angel!</h2>
                    <p className='display-6 text-center'>A Pasionate Software Developer</p>
                </div>
                <div className='col d-flex justify-content-center align-items-center'>
                    <img id='myPhoto' alt='AngelPhoto' className='rounded-circle' src={photo} />
                </div>
            </article>
        </section>
    )
}