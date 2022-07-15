import React, {useState, useEffect, useContext} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import './Navbar.css';

import {StatusContext, TokenContext} from './Store';
import CircleIcon from '@mui/icons-material/Circle';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [token, setToken] = useContext(TokenContext);
    const [status] = useContext(StatusContext);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    let StatusSymbol = () => {
        if (token !== "") {
            return (<CircleIcon style={{color: '#4caf50' }}/>)
        } else {
            return (<CircleIcon style={{color: '#f44336' }}/>)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        BIM-Profile
                        <BusinessRoundedIcon fontSize="large"/>
                        <text>{status}</text>
                    </Link>
                    <div className='navbar-status'>
                        Status:
                    </div>
                    <StatusSymbol />
                    <div>{token}</div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/erstellen' className='nav-links' onClick={closeMobileMenu}>
                                Erstellen
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/bearbeiten'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Bearbeiten
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Link to='/sign-up'>
                        <Button
                            buttonStyle='btn--outline'
                            to='/sign-up'
                        >
                            Registrierung
                        </Button>
                    </Link>
                    }
                    {button &&
                        <Button
                            buttonStyle='btn--outline'
                            onClick={() => {setToken("")}}
                        >
                            Token-Löschung
                        </Button>
                    }
                </div>
            </nav>
        </>
    );
}
