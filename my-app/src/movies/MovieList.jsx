import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const movies = [
    {
      title: 'Titanic',
    },
    {
      title: 'Lion King',
    },
  ];

  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard title={movie.title} />;
      })}
    </div>
  );
}

export default MovieList;
