import React, { Component } from 'react';
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom';


export const  Header = () => {

        let array = ["", "Java", "React", "Bootstrap", "OOP", "Nodejs", "APIs"];

        return (
            <header id='header' className='container g-0'>

                <div className='nav row justify-content-between'>
                    <div className='logo col-12 col-md-12 col-lg-6 d-flex flex-wrap ps-4 align-items-center justify-content-center'>
                        <h1 className='fs-1 col-auto m-2 text-white '><Link className='heading-h1' to='/'>Angel Mondragón</Link></h1>

                        <div className='col-auto d-flex align-items-center'>
                            <div className='logo-icon  m-2 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                            <div className='slide-text'>
                                <div className='dynamic-list-container'>
                                    <ul className='text-center '>
                                        {
                                            array.map((el, ix) => {
                                                return (
                                                    <li className='dynamic-logo m-0' key={el}>
                                                        {el}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='logo-icon  m-2 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Navbar/>
                </div>
            </header>
        )
}