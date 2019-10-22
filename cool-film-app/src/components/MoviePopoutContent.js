import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  
  background-color: white;
  border-radius: 1%;
  padding: 4%;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.14);
  width: 20vmin;
  margin: auto;
  
`;

const Title = styled.div`
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  margin: auto;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
`;

const Text = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;

const TextContainer = styled.div`
  width: 100%;
`;

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
