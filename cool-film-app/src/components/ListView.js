import React from 'react'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import HoverPopout from './HoverPopout'
import MoviePopoutContent from './MoviePopoutContent'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: 0.5s all ease-in;
`

export default function ListView ({ movies }) {
  return (
    <Container>
      {movies.map((movie, index) => {
        const { title, posterUrl, year, rating, plot } = movie;
        return (
          <div key={index}>
            <HoverPopout
              popout={
                <MoviePopoutContent
                  title={title}
                  posterUrl={posterUrl}
                  year={year}
                  rating={rating}
                  plot={plot}
                />
              }>
              <MovieItem
                title={title}
                posterUrl={posterUrl}
                year={year}
              />
            </HoverPopout>
          </div>
        )
      })}
    </Container>
  );
}
