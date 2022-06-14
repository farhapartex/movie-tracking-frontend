import * as React from 'react';
import { connect } from 'react-redux';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { movieActions } from "../../_actions/movie.actions";


interface SearchBoxDef {
    searchTxt: string,
    handleChange: (param: React.SetStateAction<string>) => void | null
}
const CustomizedInputBase = (props: any) => {
    const { searchTxt, setSearchTxt, handleSubmit } = props;


    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={handleSubmit}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search movie by title"
                inputProps={{ 'aria-label': 'search movie information' }}
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}


const actionCreators = {
    searchMovieByName: movieActions.searchMovieByName
};

const connectedLoginPage = connect(() => { }, actionCreators)(CustomizedInputBase);
export { connectedLoginPage as CustomizedInputBase };