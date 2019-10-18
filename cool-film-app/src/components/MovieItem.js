import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 18px;
`

const Poster = styled.img`
  width: 150px;
`

const Text = styled.div`
  font-size: 10px;
`

export default function MovieItem ({ title, posterUrl, year }) {
  return (
    <Container>
      <Poster alt={title} src={posterUrl} />
      <Text>{title}</Text>
      <Text>{year}</Text>
    </Container>
  );
}
