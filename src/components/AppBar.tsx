import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledInputBase, SearchIconWrapper, Search } from './_custom';
import { CustomizedInputBase } from './_custom/CustomSearchBox';


const SearchAppBar = (props: any) => {
    const { searchTxt, setSearchTxt, handleSubmit } = props;

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
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default SearchAppBar;