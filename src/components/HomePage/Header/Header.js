import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import img from '../../../media/images/circle.png';

const Header = () => {
    return (
        <div className="header-conatainer ">
            <div className="">
                <Link to="/"> <img src={img} className="header-img" alt="" /></Link>
            </div>
            <div className="navbar-container">
                <Link to="/" className="nav">Home</Link>
                <Link to="/about" className="nav">About Me</Link>
                <Link to="/projects" className="nav">Projects</Link>
                <Link to="/blogs" className="nav">Blogs</Link>
            </div>

        </div>
    );
};

export default Header;