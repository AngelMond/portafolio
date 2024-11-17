import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, AboutMe, Portfolio, Contact, Resume } from '../pages';

export const RouterComponent = () => {
    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={
                <div className='container mt-5 d-flex align-items-center justify-content-center page-not-found'>
                    <h2 className='text-center'>404 Page not found</h2>
                </div>
            }
            />
        </Routes>

    )
}

