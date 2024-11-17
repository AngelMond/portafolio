import React, { Component } from 'react';

import googleEngineer from '../../images/tech-images/devops/cloudEngineer.png';


export const AboutMe = () => {
    return (
        <section className='container fs-responsive'>
            <article className='section-border mt-5 p-4 shadow  text-start'>
                <h3 className='text-center section-headings mb-4'>Full Stack Web Developer</h3>
                <div id="aboutMe-text-container" className='p-2 ff'>
                    <p className='paragraph  px-3 mb-2 text-sm-start text-md-start fs-responsive'>
                        I'm from Mexico City, i'm passionate about software, always love keep on learning and improving my skills.
                    </p>
                    <p className='paragraph px-3 mb-4 text-sm-start text-md-start fs-responsive'>
                        Developed +200 user interfaces in real projects.
                    </p>
                    <div className='paragraph  px-3 mb-4 text-sm-start text-md-start'>
                        <div className='row mt-5 fs-responsive'>

                            {/* Skills as front-end developer */}
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <span className='fw-bold fs-16'> Skills as a front-end developer:</span>
                                <ul className='mt-2 mb-5 text-start fs-skills'>
                                    <li className='text-muted ff'>
                                        React
                                        <ul>
                                            <li>Use of hooks and custom hooks &#40;useState, useContext, useEffect&#41;</li>
                                            <li>Conditional rendering</li>
                                            <li>Redux -  Use of redux for certain data that needs to be available from any component &#40;Store, reducers&#41;</li>
                                            <li>Context -  Use of context in specific components</li>
                                            <li>Axios -  &#40;Interceptors&#41;</li>
                                            <li>Use of AbortController to stop any api call if the component is destroyed </li>
                                            <li>Clean architecture in any proyect to be scalable</li>
                                            <li>component creation and reuse</li>
                                            <li>Responsive interfaces</li>
                                            <li>React router dom &#40;Use of lazy loading&#41;</li>
                                            <li>CSS and libraries &#40;Bootstrap, Tailwind, MUI&#41;</li>
                                        </ul>
                                    </li>
                                    <li className='text-muted ff'>
                                        APIs
                                        <ul>
                                            <li>Send and receive http responses &#40;Different data structures&#41;</li>
                                            <li>Experience working with &#40;Arrays, files, timestamps&#41;</li>
                                            <li>Render the necessary information according to the requirement</li>
                                            <li>Use of Promise.all and Promise.allSettled to execute the different endpoints in parallel.</li>
                                        </ul>
                                    </li>
                                    <li className='text-muted ff'>Creation and validation of user forms</li>
                                    <li className='text-muted ff'>TDD &#40;Test Driven Develpment&#41;</li>
                                </ul>
                            </div>

                            {/* Skills as back-end developer */}
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <span className='fw-bold fs-16'> Skills as a back-end developer:</span>
                                <ul className='mt-2 mb-5 text-start fs-skills'>
                                    <li className='text-muted ff'>
                                        Java
                                        <ul>
                                            <li>Design patterns like MVC</li>
                                            <li>OOP</li>
                                        </ul>
                                    </li>
                                    <li className='text-muted ff'>
                                        Frameworks
                                        <ul>
                                            <li>Spring</li>
                                        </ul>
                                    </li>
                                    <li className='text-muted ff'>
                                        APIs
                                        <ul>
                                            <li>Creation and manipulation of APIRest endpoints</li>
                                            <li>knowledge about libraries like &#40;Apache poi&#41; to create xlsx in API responses</li>
                                        </ul>
                                    </li>
                                    <li className='text-muted ff'>Notions about Stored Procedures</li>
                                    <li className='text-muted ff fw-bolder'>
                                        Implementation of search engines like Solr with java
                                        <ul>
                                            <li>Experience on implementation for a search engine to look over than 5 billion records, and the creation of user interfaces with React to consume that info</li>
                                            <li>Creation of schemas</li>
                                            <li>Use of general query function</li>
                                            <li>Use of faceting, faceting with pivots, facet-ranges</li>
                                        </ul>
                                    </li>
                                    <li className='text-muted ff'>
                                        Express with Nodejs
                                        <ul>
                                            <li>JWT</li>
                                        </ul>
                                    </li>
                                    <li className='text-muted ff'>
                                        Databases
                                        <ul>
                                            <li>MySQL</li>
                                            <li>MongoDB</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/* Skills as cloud Engineer */}
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                <span className='fw-bold fs-16'> Skills as Google Cloud Engineer:</span>
                                <ul className='mt-2 mb-5 text-start fs-skills'>
                                    <li className='text-muted ff'>Creation of VMs and instance groups</li>
                                    <li className='text-muted ff'>Clusters in kubernetes</li>
                                    <li className='text-muted ff'>Docker &#40;Containers & Registry&#41;</li>
                                    <li className='text-muted ff'>Deploy applications using Cloud Build, Cloud Run and App Engine</li>
                                    <li className='text-muted ff'>CI/CD - Splitting traffic across different versions in App Engine</li>
                                </ul>
                            </div>
                            <div className='paragraph px-3 text-sm-start text-md-start fw-bold my-2 fs-responsive'>
                                <div className='row align-items-center'>
                                    <div className='col-auto fs-responsive'>
                                        <a href="https://google.accredible.com/88844f39-e85b-4985-83d3-a99c89bbb6a8" target="_blank">
                                            <img src={googleEngineer} alt="Google Associate Cloud Engineer" title="Click to view credentials as Associate Cloud Engineer" className="aboutMeImages" />
                                        </a>
                                        <span style={{ marginLeft: '5px' }}> Certified as a Google Associate Cloud Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <p className='paragraph  px-3 mb-4 text-sm-start text-md-start fs-responsive'>
                        I've always had a passion for technology, i just can sitdown for hours and hours to programm. I have never felt so much passion for something in my life and i'am just happy to have discovered my passion.
                        I remember a saying:  <cite className='fw-bold'>"Choose a job you're passionate about and you won't have to work a day in your life". </cite>
                        I can say that i'm living that!
                    </p>

                    {/* <p className=' px-3 mb-4 text-sm-start text-md-start'>
                            I consider myself a disciplined person, and that helps me a lot to get the necessary knowledge to work as a web developer.
                            I really like learning about data structures and algorithms, I think that's a fundamental part of being a good software developer.
                        </p> */}

                    <p className='paragraph  px-3 mb-4 text-sm-start text-md-start fs-responsive'>
                        My resume is provided, so please feel free to download it, if interested look forward to hearing from you!
                    </p>
                    <div className='paragraph px-3 mb-4 text-sm-start text-md-start fs-responsive'>
                        Wisdom comes from experience and experience is often the result of a lack of
                        wisdom.
                        <figcaption>
                            -<cite id="sourceCite" title="Source">Terry Pratchett</cite>
                        </figcaption>
                    </div>
                </div>
            </article>
        </section>
    )
}