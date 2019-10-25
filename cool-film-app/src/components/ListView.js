import React from 'react'
import styled from 'styled-components'
import MovieItem from './MovieItem'
//Hoverpopout
import HoverPopout from './HoverPopout'
import MoviePopoutContent from './MoviePopoutContent'
//Modal
import ModalPopout from './ModalPopout'
import ModalPopoutContent from './ModalPopoutContent'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
              

            </HoverPopout>
            
            <ModalPopout
              popout={
                <ModalPopoutContent
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
            </ModalPopout>

          </div>
        )
      })}
    </Container>
  );
}
