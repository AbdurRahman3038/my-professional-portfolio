import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import TopBanner from '../TopBanner/TopBanner';
import TopProjects from '../TopProjects/TopProjects';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <AboutMe></AboutMe>
            <TopProjects></TopProjects>
        </div>
    );
};

export default Home;