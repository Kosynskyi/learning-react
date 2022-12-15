import React from 'react';
import { useEffect, useState } from 'react';
import { getMovieByKeyWord } from 'services/API/API';
import SearchBox from 'components/SearchBox';
import { useLocation, useSearchParams } from 'react-router-dom';
import { List, Item, StyledLink, Image } from './Movies.styled';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    getMovieByKeyWord(query).then(setSearchedMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  //   const handleChange = value => {
  //     setSearchParams(value !== '' ? { query: value } : {});
  //   };

  return (
    <>
      <SearchBox
        // value={query}
        onSubmit={handleSubmit}
        // onChange={handleChange}
      />
      <List>
        {searchedMovies.length > 0 &&
          searchedMovies.map(({ id, original_title, backdrop_path }) => (
            <Item key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                  alt={original_title}
                  width="120"
                />
                {original_title}
              </StyledLink>
            </Item>
          ))}
      </List>
    </>
  );
};

export default Movies;
