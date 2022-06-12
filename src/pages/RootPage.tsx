import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchAppBar from '../components/AppBar';

const mdTheme = createTheme();

const RootPage = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ height: '100vh', background: '#595959' }}>
                <SearchAppBar />
            </Box>

        </ThemeProvider>
    )
}

export default RootPage;