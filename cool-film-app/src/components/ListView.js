import React from 'react'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import HoverPopout from './HoverPopout'
import MoviePopoutContent from './MoviePopoutContent'
import {Component} from 'react'


const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageNumberContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const PageNumberButton = styled.li`
  color: blue;
  user-select: none;
  cursor: pointer;
  border: 1px solid black;
  padding: 20px;
  background-color: #ccd8eb;
`;

class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            per_page: 14,
            current_page: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            current_page: Number(event.target.id)
        });
    }

    render() {
        // Logic for displaying only 14 movies per page
        const {per_page, current_page} = this.state;
        const finalMovieOnPageIndex = current_page * per_page;
        const firstMovieOnPageIndex = finalMovieOnPageIndex - per_page;
        const currentMovies = this.props.movies.slice(firstMovieOnPageIndex, finalMovieOnPageIndex);
        /* Page navigation logic */
        // Page number navigation
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.movies.length / 14); i++) {
            console.log(i);
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <PageNumberButton
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </PageNumberButton>
            );
        });
        return (
            <div>
                <MovieListContainer>
                    {currentMovies.map((movie, index) => {
                        if (movie === undefined) {
                            console.log("Null")
                        }else {
                                return <div key={index}>
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
                            }
                    })
                    }
                </MovieListContainer>
                <PageNumberContainer id={pageNumbers}>
                    {renderPageNumbers}
                </PageNumberContainer>
            </div>
        );
    }

    componentDidUpdate() {
        console.log("update");
    }

}

export default ListView
