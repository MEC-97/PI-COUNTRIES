import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./landing.module.css"


const LandingPage = () => {
    return (
        <div className={styles.landing}>
           
            <Link to="/home">
            <button className={styles.button}> PRESS START </button>
            </Link>
            <img src="" alt="" />
        </div>
    );
}

export default LandingPage;