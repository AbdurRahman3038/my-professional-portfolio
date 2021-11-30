import React from 'react';
import Footer from '../../Footer/Footer';
import Accomplishment from '../Accomplishment/Accomplishment';
import ContactMe from '../ContactMe/ContactMe';
import Skills from '../Skills/Skills';
import TopBanner from '../TopBanner/TopBanner';
import TopProjects from '../TopProjects/TopProjects';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Accomplishment></Accomplishment>
            <TopProjects></TopProjects>
            <Skills></Skills>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;