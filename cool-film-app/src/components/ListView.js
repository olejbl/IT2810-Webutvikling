import React from 'react';
import "./components/ListView.css";

function SelectFunction(selected) {
  alert(selected)
}

export default function ListView ({ movies }) {
  return (
    <div className="list-container">
      {movies.map((movie, index) => {
        const { title, posterUrl, year, rating, plot, awards } = movie;
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
                  awards={awards}
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
    </div>
  );
}
