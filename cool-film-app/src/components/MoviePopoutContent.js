import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border-width: 1px;
  border-color: lightgrey;
  border-style: solid;
  border-radius: 8px;
  padding: 16px;
`

const Title = styled.div`
  padding: 5px;
  font-size: 12px;
`

const Poster = styled.img`
  width: 150px;
  `

const Text = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`

const TextContainer = styled.div`
  min-width: 150px;
  max-width: 230px;
`

export default function MoviePopoutContent ({
  title,
  posterUrl,
  year,
  rating,
  plot,
}) {
  return (
    <Container>
      <Title>{title} - {year}</Title>
      <TextContainer>
        <Text>IMDB rating: {rating}</Text>
        <Text>{plot}</Text>
      </TextContainer>
    </Container>
  );
}
