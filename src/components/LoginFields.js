import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import {Grid, Paper, Button, Typography, Link} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import APIConnection from './APIConnection';
// import Swagger from './Swagger'

import {TokenContext, StatusContext, UsernameContext, PasswordContext} from './Store';
import axios from "axios";
import {OpenAPIProvider, useOperation} from "react-openapi-client";
import OpenAPIClientAxios from 'openapi-client-axios';
import def from './def.json';

export default function LoginFields() {

    const [, setUsername] = useContext(UsernameContext);
    const [, setPassword] = useContext(PasswordContext);
    const [token, setToken] = useContext(TokenContext);
    const [, setStatus] = useContext(StatusContext);

    const gridStyle = {paddingTop: "40px"}
    const paperStyle = {padding: 20, height: '60vh', width: 280, margin: "0px auto"}
    const fieldStyle = {margin: "10px auto"}
    const btnstyle = {margin: '8px 0'}

    // --------------------------------------------------------

    /*
    const api = new OpenAPIClientAxios({ definition: 'https://bimeta-prod-api.azurewebsites.net/api-docs/v0.1/swagger.json' });
    api.init();

    async function Swagger() {
        const client = await api.getClient();
        const res = await client.GetUserToken({

        });
        console.log('POST Token', res.data);
    }*/


    const Swagger = () => {
        return (
            <>
                <OpenAPIProvider definition={def}>
                    <PetDetails/>
                </OpenAPIProvider>
            </>)
    };

    const PetDetails = () => {
        // useOperation is called right away as an effect
        const {loading, error, data} = useOperation('GetBimProfiles', {
            "Authorization": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImpGNGN1bG1BYTRtRnQycG5GYk5TbiJ9.eyJodHRwczovL2JpbWV0YS5jb20vY2xhaW1zL3JvbGVzIjpbIkFkbWluaXN0cmF0b3IiXSwiaXNzIjoiaHR0cHM6Ly9iaW1ldGEuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVmNWEwMWExNTUxMTFmMDA2ZmZlZjg1ZiIsImF1ZCI6Imh0dHBzOi8vYmltZWF0YS5jb20vYXBpIiwiaWF0IjoxNjU4MzM0MTg4LCJleHAiOjE2NTg0MjA1ODgsImF6cCI6ImpKVkoxYlhtbXdWcGNCVURFZVVvUWNiMGFyUFVkWjltIiwic2NvcGUiOiJyZWFkOmFsbGRhdGEgd3JpdGU6YWxsZGF0YSIsImd0eSI6InBhc3N3b3JkIiwicGVybWlzc2lvbnMiOlsicmVhZDphbGxkYXRhIiwid3JpdGU6YWxsZGF0YSJdfQ.rw-IQotLNr85iGZXFHKVNdQ4CVroncaPD6-IB2cIz8MUVps6ikSKzZ3WoakmgHzVJDV4hI9m0omRlUydBqeoXZ-1JBn1CNyxx71Ph2OiRqBHXfdGVMi6TrhkvATS7PZ4W-U7ZySAuM4HTj9l6hVTN-qUDZexA4epKVgbhylJZ2gkTLGjFI7FjN7Wxj4yre0P8Ufi1RcdpMsWnAdZESt6FqzFIFFtLVkfVg5ATqkdttYWUxOZ4OoqIHTQSgCp-MF5ZUlGaCVYX8ChGr0TbCeRabY7vQb8dDh1iyh_rnzIdjcfjjM7j8kSQjFuODLGHRntbH4ibCdRczUJ5W69yk3zzg"
        });

        if (loading || !data) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className="Swagger">
                <h3>{data.name}</h3>
                {console.log(data)}
                <ul>
                    <li>
                        <strong>id:</strong> {data}
                    </li>
                </ul>
            </div>
        );
    };

    //------------------------------------------


    const APIConnection2 = async () => {

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
            //setToken(res);
            //window.alert("Token " + {token} + " erzeugt")
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <video src='/videos/construction.mp4' autoPlay loop muted/>
            <Grid style={gridStyle}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <BusinessRoundedIcon fontSize="large"/>
                        <h2>Login</h2>
                    </Grid>
                    <TextField style={fieldStyle} label='Username' placeholder='Enter username' fullWidth required
                               onClick={e => setUsername(e.target.value)}/>
                    <TextField style={fieldStyle} label='Passwort' placeholder='Enter password' type='password'
                               fullWidth required onClick={e => setPassword(e.target.value)}/>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
                            onClick={() => APIConnection2()}>Token-Request</Button>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
                            onClick={setToken("")}>Token-Delete</Button>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
                            onClick={() => Swagger()}>Test Swag</Button>
                    <Swagger/>
                </Paper>
            </Grid>
        </>
    );
}
