import React from 'react';
import Footer from '../../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import TopBanner from '../TopBanner/TopBanner';
import TopProjects from '../TopProjects/TopProjects';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <AboutMe></AboutMe>
            <TopProjects></TopProjects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;