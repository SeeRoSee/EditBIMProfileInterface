import {useContext} from 'react';
import axios from 'axios';

import {TokenContext, UsernameContext, PasswordContext} from './Store';

async function APIConnection() {

    const [token, setToken] = useContext(TokenContext);
    const [username] = useContext(UsernameContext);
    const [password] = useContext(PasswordContext);

    try {
        const requestOptions = {
            contentType: "application/json",
            data: {
                //userName: {username},
                //password: {password}
                userName: "sven.axt@map-network.de",
                password: "r2yLHLR(zslX<{DCtktA"
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