import React from 'react'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import HoverPopout from './HoverPopout'
import MoviePopoutContent from './MoviePopoutContent'
import {Component} from 'react'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const makeHttpRequestWithPage = async pageNumber => {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    this.setState({
        users: data.data,
        total: data.total,
        per_page: data.per_page,
        current_page: data.page,
    });
};

class ListView extends Component {
    render() {
        return (
            <div>
                <Container>
                  {this.props.movies.map((movie, index) =>
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
                    </HoverPopout></div>)

                  }
                </Container>
            </div>
        );
    }
}

export default ListView;