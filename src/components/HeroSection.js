import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import {Link} from "react-router-dom";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/construction.mp4' autoPlay loop muted/>
            <h1>BIM-Profile</h1>
            <p>Erstellen | Bearbeiten | Teilen</p>
            <div className='hero-btns'>
                <Link to='/sign-in'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        to='/sign-in'
                    >
                        Login
                    </Button>
                </Link>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={() => window.open('https://bimeta.de')}
                    >
                        BIMeta
                    </Button>
            </div>
        </div>
    );
}

export default HeroSection;
