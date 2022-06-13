import React from "react";
import { connect } from 'react-redux';
import { movieActions } from "../../_actions/movie.actions";

const HomePage = (props: any) => {

    console.log(props.movie);

    return (
        <React.Fragment>
            {props.movie.items}
        </React.Fragment>
    )
}

function mapState(state: any) {
    const { alert, authentication, user, movie } = state;
    return { alert, authentication, user, movie };
}

const actionCreators = {
    searchMovieByName: movieActions.searchMovieByName
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };