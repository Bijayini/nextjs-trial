import React from 'react';

import dynamic from 'next/dynamic';

const DynamicMovieList = dynamic(() => import('../MovieList'))

const DynamicSortingDropDown = dynamic(() => import('../sortingDropDown'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { sortingParam: '' };
  }

   handleChange(e) {
    this.setState({ sortingParam: e.target.value });
  }

  render() {
    return (
      <div className="container-left">
        <div className="list-header">
          <h1>Movie Browser</h1>
          <DynamicSortingDropDown selectedValue={this.state.sortingParam}
                           handleChange={this.handleChange} />
        </div>
        <DynamicMovieList sortingParam={this.state.sortingParam} {...this.props.movies} />
      </div>
    );
  }
};
