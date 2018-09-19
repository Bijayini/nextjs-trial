import React from 'react';

const MovieCard = (props) => <li key={props.movie.id}>{props.movie.title}</li>;

export default MovieCard;
