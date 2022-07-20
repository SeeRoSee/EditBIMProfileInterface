import {useContext} from 'react';
import axios from 'axios';

import {TokenContext, UsernameContext, PasswordContext} from './Store';

async function APIConnection() {

    const [token, setToken] = useContext(TokenContext);
    // eslint-disable-next-line
    const [username] = useContext(UsernameContext);
    // eslint-disable-next-line
    const [password] = useContext(PasswordContext);

    try {
        const requestOptions = {
            contentType: "application/json",
            data: {
                //userName: {username},
                //password: {password}
            }
        }
        let res = await axios.post('https://bimeta-prod-api.azurewebsites.net/api/v0.1/auth', requestOptions);
        console.log(res);
        setToken(res);
        window.alert("Token " + {token} + " erzeugt")
    }
    catch(e) {
        console.log(e);
    }
}

export default APIConnection;
