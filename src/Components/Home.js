import React from 'react';
import Navbar from './Navbar';
import Items from './Items';
import '../Components/home.css';
import singapore from '../images/singapore.jpg'

const Home = () => {
    return(
        <div className="container">
            <Navbar/>
            <img className="banner" src={singapore} alt="banner"/>
            <Items />
        </div>
    )
}

export default Home;