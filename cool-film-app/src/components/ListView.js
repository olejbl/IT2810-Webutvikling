import React from 'react'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import HoverPopout from './HoverPopout'
import MoviePopoutContent from './MoviePopoutContent'
import {Component} from 'react'

var personscore;

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

    changescore = (movie) => {
        console.log(movie.title);
        console.log(movie.year);
        console.log(movie._id);

        var person = prompt("Please enter on a scale from 1-10 what score you would give" + movie.title);
        if (person == null || person == "") {
            alert("Please give a score")
        } else {
            personscore = person
            fetch('http://localhost:3001/movies/' + movie._id)
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    console.log(data);
                    console.log(data._id);
                    console.log(personscore);
                    var newantall = (data.antall_scorere + 1);
                    console.log(newantall);
                    var newscore = data.score * data.antall_scorere;
                    console.log(newscore);
                    var newscore2 = Number(newscore) + Number(personscore);
                    console.log(newscore2);
                    var newscore3 = newscore2 / newantall;
                    console.log(newscore3);
                    fetch('http://localhost:3001/movies/' + data._id, {
                        method: 'PATCH',
                        body: JSON.stringify({
                            score: newscore3,
                            antall_scorere: newantall
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    }).then(response => {
                        return response.json()
                    }).then(json => {
                        console.log("done");
                    });
                })
        }
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

                        return <div key={index} onClick={() => this.changescore(movie)}>
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

                    })
                    }
                </MovieListContainer>
                <PageNumberContainer id={pageNumbers}>
                    {renderPageNumbers}
                </PageNumberContainer>
            </div>
        );
    }
}

export default ListView
