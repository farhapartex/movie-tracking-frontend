import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { CustomizedInputBase } from './_custom/CustomSearchBox';


const SearchAppBar = (props: any) => {
    const { searchTxt, setSearchTxt, handleSubmit, logoutAction } = props;

    const henadleLogout = () => {
        logoutAction();
        window.location.href = "/login";
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ background: '#333333', color: '#f2f2f2' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Movie Tracker
                    </Typography>
                    <CustomizedInputBase searchTxt={searchTxt} setSearchTxt={setSearchTxt} handleSubmit={handleSubmit} />
                    <Button size="small" variant="outlined" sx={{ ml: 2 }} color="warning" onClick={henadleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default SearchAppBar;