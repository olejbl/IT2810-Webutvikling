import React from 'react';
import "./components/MovieItem.css";

export default function MovieItem ({ title, posterUrl, year }) {
  return (
    <div className="container">
      <img className="poster" alt={title} src={posterUrl} />
      <h1 className="title">{title} - {year}</h1>
    </div>
  );
}
