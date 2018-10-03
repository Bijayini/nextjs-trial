import React from 'react';
import {isEqual, uniqBy} from 'lodash';

import MovieCard from '../MovieCard';



export default class MovieList extends React.Component{

  getMovieListSortedByParam = (movies) => {
    const {sortingParam} = this.props;

    return( movies.sort((movie1, movie2) => {
      const firstMovie = movie1[sortingParam].toLowerCase();
      const secondMovie = movie2[sortingParam].toLowerCase();
      return (firstMovie > secondMovie) ? 1 : ((secondMovie > firstMovie) ? -1 : 0);
    }));
 };

   getSortedMovieList = (movies) => {
     const { sortingParam } = this.props;

     return sortingParam !== '' ? this.getMovieListSortedByParam(movies): movies;
  };


  render(){
    console.log('Yeah!!! I am inside render');
    const {movies} = this.props;
    const uniqMovies = uniqBy(movies, 'title');

    return(
        <ul>
          {uniqMovies.length > 0 && this.getSortedMovieList(uniqMovies).map( movie => <MovieCard movie={movie} key={movie.title} /> )}
        </ul>
    );
  };
}
