import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  border-width: 5px;
  border-color: black;
  border-style: solid;
  margin-left: 10px;
  margin-top: 10px;
  width: 150px;
  height: 200px;
`

const Title = styled.h1`
  width: auto;
  padding: 5px;
  color: black;
  font-size: 10px;
`

const Poster = styled.img`
  width: 150px;
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
      <Poster alt={title} src={posterUrl} />
      <Title>{title} - {year}</h1>
      <h3>{rating}</h3>
      <h3>{plot}</h3>
    </Container>
  );
}
