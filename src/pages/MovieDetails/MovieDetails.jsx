import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Loader from 'components/Loader';
import { getMovieDetailsById } from 'services/API/API';
import { Box } from 'components/Box';
import {
  StyledLinkGoBack,
  Image,
  Title,
  Text,
  SecondaryTitle,
  GenresList,
  GenreItem,
  TextOverview,
  AdditionalList,
  AdditionalLink,
  AdditionalItem,
  Wrapper,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return;

  const { backdrop_path, title, vote_average, overview, genres } = movie;
  const backLinkHref = location.state?.from ?? '/';

  const links = [
    { id: 1, name: 'Cast' },
    { id: 2, name: 'Reviews' },
  ];

  return (
    <Box as="section" pt={6} display="flex" flexDirection="column">
      <StyledLinkGoBack to={backLinkHref}>
        <BiArrowBack />
        {'  '}Go back
      </StyledLinkGoBack>

      <Wrapper>
        <Box mr={4} mb={4}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={`logo of the film ${title}`}
            width="340"
          />
        </Box>

        <Box>
          <Title>{title}</Title>
          <Text>User score: {Math.floor(vote_average * 10)}%</Text>
          <SecondaryTitle>Genres</SecondaryTitle>
          <GenresList>
            {genres.map(({ name }) => (
              <GenreItem key={name}>
                <p>{name}</p>
              </GenreItem>
            ))}
          </GenresList>
        </Box>
      </Wrapper>

      <SecondaryTitle>Overview</SecondaryTitle>
      <TextOverview>{overview}</TextOverview>

      <SecondaryTitle>Additional information</SecondaryTitle>
      <AdditionalList>
        {links.map(({ id, name }) => (
          <AdditionalItem key={id}>
            <AdditionalLink to={name} state={{ from: location.state.from }}>
              {name}
            </AdditionalLink>
          </AdditionalItem>
        ))}
      </AdditionalList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
