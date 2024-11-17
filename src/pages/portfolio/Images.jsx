import React, { Component } from 'react';

//Components
import { PortfolioCard } from "./PortfolioCards";

//Images
import devBlog from '../../images/portfolio/devBlog.webp';
import nurseXpress from '../../images/portfolio/nurseXpress.webp';
import weather from '../../images/portfolio/weather.webp';
import profileGenerator from '../../images/portfolio/profileGenerator.webp';
import employeeTracker from '../../images/portfolio/employeeTracker.webp';
import socialNetwork from '../../images/portfolio/socialNetwork.webp';
import ecommerceBackend from '../../images/portfolio/ecommerceBackend.webp';
import noteTaker from '../../images/portfolio/noteTaker.webp';
import reactShoppingCart from '../../images/react-shopping-cart.png'


export const Images = () => {
    return (
        <div className='p-2 d-flex flex-wrap justify-content-center align-items-center'>
            <PortfolioCard
                cardTitle="DevBlog"
                cardDescription="A blog for developers to share any topic by creating posts and add comments for other's posts"
                cardTechnologies="Nodejs/MVC/Bootstrap/MySQL/HBS"
                cardImage={devBlog}
                githubLink="https://github.com/AngelMond/Dev-Blog"
                webLink="https://sheltered-everglades-31029.herokuapp.com/"

            />
            <PortfolioCard
                cardTitle="Weather Dashboard"
                cardDescription="A web to see the weather and five days forecast weather"
                cardTechnologies="JS/Bootstrap/HTML"
                cardImage={weather}
                githubLink="https://github.com/AngelMond/Weather-Dashboard"
                webLink="https://angelmond.github.io/Weather-Dashboard/"

            />
            <PortfolioCard
                cardTitle="NurseXpress"
                cardDescription="An idea to provide nursing services just as an injection, receiving serum and also to generate
                    freelance work for nurses. Still in development"
                cardTechnologies="Nodejs/MVC/Express/MySQL/HBS"
                cardImage={nurseXpress}
                githubLink="https://github.com/aeklf/NurseXpress"
                webLink="https://nurse-express-s.herokuapp.com/"

            />
            <PortfolioCard
                cardTitle="Work Team Generator"
                cardDescription="A program developed with nodejs to generate a team profile in a software team.
                    The app let's you generate profiles for a manager, engineer's and intern's"
                cardTechnologies="Nodejs/Bootstrap/HTML"
                cardImage={profileGenerator}
                githubLink="https://github.com/AngelMond/Work-Team-Generator"
                webLink="https://drive.google.com/file/d/1rwORViybUlItr28VoGnmMV5ZN0-ymyIV/view"

            />
            <PortfolioCard
                cardTitle="Employee Tracker"
                cardDescription="As a human resourses you can view and manager, the departments, roles and employees in the company"
                cardTechnologies="Nodejs/MySQL/Git"
                cardImage={employeeTracker}
                githubLink="https://github.com/AngelMond/Employee-Tracker"
                webLink="https://drive.google.com/file/d/1_dj2cls3sSDr0GcMjtEgj37k6DpedpRX/view"

            />

            <PortfolioCard
                cardTitle="Social Network"
                cardDescription="A Backend for a social Network. Create users, add friends, create thoughts
                    and comment the other's thoughts. It uses Express for routing"
                cardTechnologies="Nodejs/Express/MongoDB/Git"
                cardImage={socialNetwork}
                githubLink="https://github.com/AngelMond/SocialNetwork-API"
                webLink="https://drive.google.com/file/d/183TcwXEPZySR_0NtCNcf2LVRZvmmloUb/view"

            />

            <PortfolioCard
                cardTitle="Ecommerce Backend"
                cardDescription="A Backend for an ecommerce bussiness that uses MySQL and the ORM Sequelize. Create
                    categories, products and tags fro you products"
                cardTechnologies="Nodejs/Express/MySQL/Sequelize"
                cardImage={socialNetwork}
                githubLink="https://github.com/AngelMond/The-BackEnd-YouNeed-ForYour-ECommerce-Business"
                webLink="https://drive.google.com/file/d/1UsbSQ5RegvqVPKQghQcotLU7-IixRx02/view"

            />

            <PortfolioCard
                cardTitle="Note Taker"
                cardDescription="A simple web to take notes, it uses a .json file to save your notes and take them wherever you go"
                cardTechnologies="Nodejs/Express/HTML/CSS"
                cardImage={noteTaker}
                githubLink="https://github.com/AngelMond/Note-Taker"
                webLink="https://blooming-anchorage-79721.herokuapp.com/"

            />

            <PortfolioCard
                cardTitle="React shoping cart"
                cardDescription="A shoping cart. Add items and bubble alert shows with the number of items in the cart"
                cardTechnologies="Nodejs/React"
                cardImage={reactShoppingCart}
                githubLink="https://github.com/AngelMond/ReactPortfolio"
                webLink="https://reactshoppingcart-eo7gahxakq-uc.a.run.app"

            />
        </div>
    )
}