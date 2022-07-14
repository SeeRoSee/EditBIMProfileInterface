import React from 'react';
import '../../App.css';
import LoginFields from '../LoginFields.js';

const loginStyle = {
    backgroundImage: 'url("../images/plan.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

export default function SignIn() {
    return <div style={loginStyle}>
        <LoginFields/>
    </div>;
}
