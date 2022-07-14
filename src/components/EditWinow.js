import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ClassList from './ClassList';
import CreateProfList from './CreateProfList';

const paperStyle = {
    padding: 20,
    height: '80vh',
    width: '40vw',
    margin: "0px auto"
}

export default function EditWindows() {
    return (
        <>
            <Grid sx={{flexGrow: 1}} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing="6">
                        <Paper
                            style={paperStyle}
                        >
                            <ClassList/>
                        </Paper>
                        <Paper
                            style={paperStyle}
                        >
                            <CreateProfList/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}