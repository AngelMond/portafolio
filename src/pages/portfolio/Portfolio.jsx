import React from "react";
import { Images } from './Images'
import resume from '../../assets/AngelMondragonResumeEN.pdf'

export const Portfolio = () => {
    return (
        <section className="container mt-5">
            <article className="section-border p-1 shadow text-center">
                <h3 className="p-2 section-headings">Portfolio</h3>

                {/* Estado de desarrollo */}
                <div className="py-5">
                    <div className="mb-4">
                        <h4 className="text-muted mb-3">Under Development</h4>
                        <div className="spinner-border text-primary mb-3" role="status" aria-hidden="true"></div>
                        <p className="text-secondary mb-4">
                            I'm working on this section to showcase my best projects.
                            <br />
                            Come back soon to see the updates!
                        </p>

                        {/* Call to action - Download Resume */}
                        <div className="mt-4 mb-4">
                            <p className="text-dark mb-3">
                                <strong>In the meantime, download my resume!</strong>
                            </p>
                            <a
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                download="My_Resume.pdf"
                                className="btn btn-primary btn-lg px-4 py-2 shadow-sm"
                            >
                                <i className="fas fa-download me-2"></i>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Progreso visual */}
                    <div className="progress mx-auto mb-4" style={{ maxWidth: '300px', height: '8px' }}>
                        <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            role="progressbar"
                            style={{ width: '65%' }}
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>

                    {/* Placeholder de proyectos */}
                    <div className="row g-3 mt-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="col-md-4">
                                <div className="card border-0 shadow-sm" style={{ opacity: '0.6' }}>
                                    <div className="card-body">
                                        <div className="placeholder-glow">
                                            <div className="placeholder bg-secondary rounded mb-3" style={{ height: '150px' }}></div>
                                            <h5 className="placeholder-glow">
                                                <span className="placeholder col-8"></span>
                                            </h5>
                                            <p className="placeholder-glow">
                                                <span className="placeholder col-7"></span>
                                                <span className="placeholder col-4"></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <small className="text-muted d-block mt-4">
                        <i className="fas fa-tools me-1"></i>
                        Last updated: {new Date().toLocaleDateString('en-US')}
                    </small>
                </div>

                {/* Descomenta cuando esté listo */}
                {/* <Images /> */}
            </article>
        </section>
    );
};