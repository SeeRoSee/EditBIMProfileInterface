import React, {useState, useContext} from 'react';
import TextField from '@mui/material/TextField';
import {Grid, Paper, Avatar, Button, Typography, Link} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";

import {TokenContext} from './Store';

export default function LoginFields() {

    const [name, setName] = React.useState('');
    const [pw, setPw] = React.useState('');
    const [token] = useContext(TokenContext);

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangePw = (event) => {
        setPw(event.target.value);
    };

    const gridStyle = {paddingTop: "40px"}
    const paperStyle = {padding: 20, height: '60vh', width: 280, margin: "0px auto"}
    const fieldStyle = {margin: "10px auto"}
    const avatarStyle = {backgroundColor: '#1bbd7e'}
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
                    <TextField style={fieldStyle} label='Username' placeholder='Enter username' fullWidth required/>
                    <TextField style={fieldStyle} label='Passwort' placeholder='Enter password' type='password'
                               fullWidth required/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign
                        in</Button>
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