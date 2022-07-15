import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import {Grid, Paper, Button, Typography, Link} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import APIConnection from './APIConnection';

import {TokenContext, StatusContext, UsernameContext, PasswordContext} from './Store';

export default function LoginFields() {

    const [, setUsername] = useContext(UsernameContext);
    const [, setPassword] = useContext(PasswordContext);
    const [token] = useContext(TokenContext);
    const [, setStatus] = useContext(StatusContext);

    const gridStyle = {paddingTop: "40px"}
    const paperStyle = {padding: 20, height: '60vh', width: 280, margin: "0px auto"}
    const fieldStyle = {margin: "10px auto"}
    const btnstyle = {margin: '8px 0'}

    return (
        <>
            <video src='/videos/construction.mp4' autoPlay loop muted/>
            <Grid style={gridStyle}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <BusinessRoundedIcon fontSize="large"/>
                        <h2>Login</h2>
                    </Grid>
                    <TextField style={fieldStyle} label='Username' placeholder='Enter username' fullWidth required onClick={ e => setUsername(e.target.value)}/>
                    <TextField style={fieldStyle} label='Passwort' placeholder='Enter password' type='password'
                               fullWidth required onClick={ e => setPassword(e.target.value)}/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={() => APIConnection()}>Token-Request</Button>
                    <Typography>
                        <Link href="#">
                            Forgot password ?
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
}