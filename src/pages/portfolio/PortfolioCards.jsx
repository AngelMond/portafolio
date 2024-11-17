import React from "react";


export const PortfolioCard = ({ cardTitle, cardDescription, cardTechnologies, cardImage, githubLink, webLink }) => {

    return (
        <>
            <div className='image-container col-auto m-2 border border-muted p-1 rounded'>
                <div className='image-and-description-container'>
                    <div className='projectDescription rounded align-items-center'>
                        <h5 className='project-title mb-3'>{cardTitle}</h5>
                        <p className='description'>{cardDescription}</p>
                        <p className='project-technologies fst-italic'>{cardTechnologies}</p>
                    </div>
                    <img className='projectImage' alt='Proyect-DevBlog' title='Proyect-Image-DevBlog' src={cardImage} />
                </div>
                <div className='d-flex mt-1  justify-content-around'>
                    <a href={githubLink} target='_blank' rel="noopener noreferrer" className='btn project-links'>Github</a>
                    <a href={webLink} target='_blank' rel="noopener noreferrer" className='btn project-links'>Web</a>
                </div>
            </div>

        </>
    )
}