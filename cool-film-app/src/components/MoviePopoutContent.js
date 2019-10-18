import React from 'react';
import "./components/MovieItem.css";

export default function MoviePopoutContent ({
  title,
  posterUrl,
  year,
  rating,
  plot,
  awards
}) {
  return (
    <div className="container">
      <img className="poster" alt={title} src={posterUrl} />
      <h1 className="title">{title} - {year}</h1>
      <h3>{rating}</h3>
      <h3>{plot}</h3>
      <h3>{awards.join(', ')}</h3>
    </div>
  );
}
