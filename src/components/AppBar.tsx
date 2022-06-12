import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledInputBase, SearchIconWrapper, Search } from './_custom';


const SearchAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: '#333333', color: '#f2f2f2' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Movie Tracker
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default SearchAppBar;