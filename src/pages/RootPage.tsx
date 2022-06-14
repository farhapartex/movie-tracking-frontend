import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { Box, Toolbar, Typography, Grid, Button } from '@mui/material';
import SearchAppBar from '../components/AppBar';
import "../style/BannerStyle.scss";
import { HomePage } from '../components/pages/HomePage';
import MovieDetail from '../components/pages/MovieDetail';
import { movieActions } from '../_actions/movie.actions';
import { userActions } from '../_actions/user.actions';
import { Item, MovieInterface } from '../_interfaces/MovieInfoInterface';
import CustomSnackbar from '../components/_custom/SnackBar';
import BaseAlert from '../components/_custom/Alert';

const mdTheme = createTheme();

interface AlertResponse {
    type: string,
    message: string
}

const RootPage = (props: any) => {
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [snackBarMsg, setsnackBarMsg] = React.useState("");
    const [items, setItems] = React.useState<Item[] | null>(null);
    const [searchError, setSearchError] = React.useState<string>("");
    const [searchTxt, setSearchTxt] = React.useState("");
    const [alertResponse, setAlertResponse] = React.useState<AlertResponse>({ type: '', message: '' });

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.searchMovieByName(searchTxt).then((response: any) => {
            let data = response.data;
            if (data.length >= 0) {
                setItems(data);
            }
            else {
                setSearchError("Movie information not found");

            }
        }).catch((error: any) => {
            setSearchError("Movie information not found");
        });
    }

    const handleEmptySearchResult = () => {
        setItems(null);
        setSearchTxt("");
    }

    const handleSubmitMovieData = (item: Item, type: string) => {
        // const movie: MovieInterface = type === "favorite" ? { ...item, is_favorite: true, is_watched: false } : { ...item, is_favorite: false, is_watched: true }

        const movie: MovieInterface = {
            title: item.Title,
            poster: item.Poster,
            type: item.Type,
            year: item.Year,
            imdb_id: item.imdbID,
            is_favorite: type === "favorite" ? true : false,
            is_watched: type === "favorite" ? false : true,
        }


        props.submitMovieData(movie).then((response: any) => {
            console.log(response);
            if (response.status === 200) {
                setsnackBarMsg(`${item.Title} info added`);
                setOpenSnackBar(true);
            }
        }).catch((error: any) => {
            setsnackBarMsg(`${item.Title} info not added. Found error`);
            setOpenSnackBar(true);
        });
    }

    const RenderSearchItems = () => {
        let itemNode = items?.map((item, key) => {
            return <Grid item xs={3} md={2} key={key}>
                <Box sx={{ with: '100%', p: 2, background: '#333333', color: '#f2f2f2', maxHeight: 400, minHeight: 380, display: 'block' }}>
                    <img src={item.Poster} style={{ display: 'block' }} width={220} height={250} />
                    <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', mt: 2 }}>
                        {item.Title}
                    </Typography>
                    <Typography variant="caption" component="p" style={{ display: 'inline-block' }} sx={{ mr: 2 }}>
                        Year: {item.Year}
                    </Typography>
                    <Typography variant="caption" component="p" style={{ display: 'inline-block' }}>
                        IMDB ID: {item.imdbID}
                    </Typography>
                    <Typography variant="caption" component="p">
                        IMDB ID: {item.imdbID}
                    </Typography>

                    <Box sx={{ mt: 1 }}>
                        <Button variant={item.is_watched ? "contained" : "outlined"} disabled={item.is_watched} size="small" sx={{ mr: 1 }} onClick={() => handleSubmitMovieData(item, "watched")}>{item.is_watched ? 'Watched' : 'Add to Watch'}</Button>

                        <Button variant={item.is_favorite ? "contained" : "outlined"} size="small" onClick={() => handleSubmitMovieData(item, "favorite")} disabled={item.is_favorite}>{item.is_favorite ? 'Added Favorite' : 'Add Favorite'}</Button>
                    </Box>
                </Box>
            </Grid>
        })

        return (
            <Box sx={{ p: 2 }}>
                <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', color: '#f2f2f2', cursor: 'pointer' }} onClick={handleEmptySearchResult}>
                    Click to remove search result
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    {itemNode}
                </Grid>
            </Box>
        )
    }


    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ height: '120vh', background: '#4d4d4d' }}>
                <SearchAppBar handleSubmit={handleSubmit} searchTxt={searchTxt} setSearchTxt={setSearchTxt} logoutAction={props.logout} />
                <Toolbar />
                {items && items.length === 0 && <BaseAlert type='warning' message='Movies not found' />}
                {items && items.length > 0 && <RenderSearchItems />}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                </Routes>

                <CustomSnackbar openSnackBar={openSnackBar} handleClose={handleClose} message={snackBarMsg} />

            </Box>

        </ThemeProvider>
    )
}

function mapState(state: any) {
    const { alert, movie, user } = state;
    return { alert, movie, user };
}

const actionCreators = {
    searchMovieByName: movieActions.searchMovieByName,
    submitMovieData: movieActions.submitMovieData,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(RootPage);
export { connectedLoginPage as RootPage };