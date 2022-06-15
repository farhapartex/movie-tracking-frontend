import React from "react";
import { connect } from 'react-redux';
import { Box, Typography, Grid, Button } from '@mui/material';
import { movieActions } from "../../_actions/movie.actions";
import { MovieDefi } from "../../_interfaces/MovieInfoInterface";
import BaseModal from "../_custom/BaseModal";
import BaseAlert from "../_custom/Alert";
import { userActions } from "../../_actions/user.actions";


interface HomePageProps {
    favoriteList: MovieDefi[],
    watchedList: MovieDefi[],
}
const HomePage: React.FC<HomePageProps> = (props) => {
    const { favoriteList, watchedList } = props;

    const [movie, setMovie] = React.useState<MovieDefi | null>(null);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);



    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handleOpenModal = (item: MovieDefi) => {
        setMovie(item);
        setIsOpen(true);
    }


    const renderMovieList = (items: MovieDefi[], listType: string) => {
        let itemNode = items.map((item, key) => {
            return (
                <Grid item xs={2} md={2} key={key}>
                    <Box sx={{ with: '100%', p: 2, background: '#333333', color: '#f2f2f2', maxHeight: 400, minHeight: 380, display: 'block' }}>
                        <img src={item.poster} style={{ display: 'block', margin: 'auto' }} width={220} height={250} />
                        <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', mt: 2 }}>
                            {item.title.substring(0, 25)} {item.title.length > 25 ? '...' : ''}
                        </Typography>
                        <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 2 }}>
                            Year: {item.year}
                        </Typography>
                        <Typography variant="body1" component="p" style={{ display: 'inline-block' }}>
                            IMDB ID: {item.imdb_id}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <Button variant="outlined" sx={{ mr: 1 }} onClick={() => { handleOpenModal(item) }}>Details</Button>
                        </Box>
                    </Box>
                </Grid>
            )
        })

        return (
            <Box sx={{ p: 2 }}>
                <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', color: '#f2f2f2' }}>
                    {`My ${listType} movie list`}
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    {itemNode}
                </Grid>
            </Box>
        )
    }

    return (
        <Box sx={{ background: '#4d4d4d' }}>
            {favoriteList.length > 0 && renderMovieList(favoriteList, 'favorite')}
            {watchedList.length > 0 && renderMovieList(watchedList, 'watched')}

            {!favoriteList.length && !watchedList.length && <Box sx={{ width: '55%', margin: 'auto', mt: 3 }}><BaseAlert type='warning' message="We didn't find any watched or favorite movie list. To add, first search movie by title and select as Watched or Favorite" /></Box>}
            <BaseModal isOpen={isOpen} handleCloseModal={handleCloseModal}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <img src={movie?.poster} style={{ display: 'block', margin: 'auto' }} width={290} height={350} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
                            {movie?.title}
                        </Typography>
                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 3 }}>
                                <span style={{ fontWeight: 'bold' }}>Director</span>: {movie?.director}
                            </Typography>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }}>
                                <span style={{ fontWeight: 'bold' }}>Writer</span>: {movie?.writer}
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body1" component="p">
                                <span style={{ fontWeight: 'bold' }}>Actor/Actress</span>: {movie?.actors}
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 3 }}>
                                <span style={{ fontWeight: 'bold' }}>Rated</span>: {movie?.rated}
                            </Typography>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 3 }}>
                                <span style={{ fontWeight: 'bold' }}>Runtime</span>: {movie?.runtime}
                            </Typography>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }} >
                                <span style={{ fontWeight: 'bold' }}>Year</span>: {movie?.year}
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 3 }}>
                                <span style={{ fontWeight: 'bold' }}>IMDB ID</span>: {movie?.imdb_id}
                            </Typography>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 3 }}>
                                <span style={{ fontWeight: 'bold' }}>Genre</span>: {movie?.genre}
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 3 }}>
                                <span style={{ fontWeight: 'bold' }}>Language</span>: {movie?.language}
                            </Typography>
                            <Typography variant="body1" component="p" style={{ display: 'inline-block' }} sx={{ mr: 3 }}>
                                <span style={{ fontWeight: 'bold' }}>Country</span>: {movie?.country}
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body1" component="p">
                                <span style={{ fontWeight: 'bold' }}>Plot</span>: {movie?.plot}
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body1" component="p">
                                <span style={{ fontWeight: 'bold' }}>Awards</span>: {movie?.awards}
                            </Typography>
                        </Box>
                        <Button onClick={handleCloseModal}>Close</Button>
                    </Grid>
                </Grid>
            </BaseModal>

        </Box>
    )
}

function mapState(state: any) {
    const { alert, authentication, user, movie } = state;
    return { alert, authentication, user, movie };
}

const actionCreators = {
    searchMovieByName: movieActions.searchMovieByName,
    getMovieList: movieActions.getMovieList,
    logout: userActions.logout
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };