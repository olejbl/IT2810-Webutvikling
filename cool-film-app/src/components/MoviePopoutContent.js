import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.14);
  left: 50%;
  width: fit-content;
`;

const Title = styled.div`
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3%;
`;

const Poster = styled.img`
  width: 150px;
`;

const Text = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;

const TextContainer = styled.div`
  min-width: 150px;
  max-width: 200px;
`;

export default function MoviePopoutContent ({
  title,
  posterUrl,
  year,
  _id,
  rating,
  plot,
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <TextContainer>
          <Text>Premiere: {year}</Text>
          <Text>IMDB rating: {rating}</Text>
          <br/>
          <Text>{plot}</Text>
      </TextContainer>
    </Container>
  );
}
