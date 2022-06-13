import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { connect } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Grid, Card, CardMedia, Avatar } from '@mui/material';
import SearchAppBar from '../components/AppBar';
import VerticalCarousel from '../components/_custom/VerticalCarousel';
import "../style/BannerStyle.scss";
import { HomePage } from '../components/pages/HomePage';
import MovieDetail from '../components/pages/MovieDetail';
import { movieActions } from '../_actions/movie.actions';
import { userActions } from '../_actions/user.actions';

const mdTheme = createTheme();

interface Item {
    Title: string,
    Poster: string,
    Type: string,
    Year: string,
    imdbID: string
}
const RootPage = (props: any) => {
    const [items, setItems] = React.useState<Item[]>([]);
    const [searchError, setSearchError] = React.useState<string>("");
    const [searchTxt, setSearchTxt] = React.useState("");

    // React.useEffect(() => {
    //     if (props.movie.hasOwnProperty("items")) {
    //         setItems(props.movie.items);
    //     }

    // }, [props.movie]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("started handling");
        props.searchMovieByName(searchTxt).then((response: any) => {
            let data = response.data;
            if (data.Response === "True") {
                setItems(response.data.Search);
            }
            else {
                setSearchError("Movie information not found");

            }
        }).catch((error: any) => {
            setSearchError("Movie information not found");
        });
    }

    const handleEmptySearchResult = () => {
        setItems([]);
        setSearchTxt("");
    }

    const RenderSearchItems = () => {
        let itemNode = items.map((item, key) => {
            return <Grid item xs={3} md={2} key={key}>
                <Box sx={{ with: '100%', p: 2, background: '#333333', color: '#f2f2f2', maxHeight: 360, minHeight: 350, display: 'block' }}>
                    <img src={item.Poster} style={{ display: 'block' }} width={220} height={250} />
                    <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', mt: 2 }}>
                        {item.Title}
                    </Typography>
                    <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 2 }}>
                        Year: {item.Year}
                    </Typography>
                    <Typography variant="body1" component="p" style={{ display: 'inline-block' }}>
                        IMDB ID: {item.imdbID}
                    </Typography>
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
            <Box sx={{ height: '100vh', background: '#4d4d4d' }}>
                <SearchAppBar handleSubmit={handleSubmit} searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
                <Toolbar />
                {items.length > 0 && <RenderSearchItems />}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                </Routes>

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
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(RootPage);
export { connectedLoginPage as RootPage };