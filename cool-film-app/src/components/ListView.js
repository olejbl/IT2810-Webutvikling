import React from 'react'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import HoverPopout from './HoverPopout'
import MoviePopoutContent from './MoviePopoutContent'
import {Component} from 'react'
import ReactPaginate from 'react-paginate';

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies,
            per_page: 14,
            current_page: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { movies, per_page, current_page } = this.state;
        const finalMovieOnPageIndex = current_page * per_page;
        const firstMovieOnPageIndex = finalMovieOnPageIndex - per_page;
        const currentMovies = this.props.movies.slice(firstMovieOnPageIndex, finalMovieOnPageIndex);
        return (
            <div>
                <MovieListContainer>
                    {currentMovies.map((movie, index) =>
                        <div key={index}>
                            <HoverPopout
                                popout={
                                    <MoviePopoutContent
                                        title={movie.title}
                                        posterUrl={movie.posterUrl}
                                        year={movie.year}
                                        rating={movie.rating}
                                        plot={movie.plot}
                                    />
                                }>
                                <MovieItem
                                    title={movie.title}
                                    posterUrl={movie.posterUrl}
                                    year={movie.year}
                                />
                            </HoverPopout></div>
                    )}
                </MovieListContainer>
            </div>
        );
    }


}

export default ListView;