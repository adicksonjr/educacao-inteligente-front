import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const TopBar = () => {

    return (
        
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MOBIEDUCA.ME
                </Typography>
                <Button color="inherit">Sair</Button>
            </Toolbar>
        </AppBar>
    )
}
export default TopBar;