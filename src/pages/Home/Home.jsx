import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/API/API';
import { useLocation } from 'react-router-dom';
import { MainTitle, List, Item, StyledLink, Image } from './Home.styled';
import { GiFilmSpool } from 'react-icons/gi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <MainTitle>
        Trending <GiFilmSpool /> today
      </MainTitle>
      <List>
        {movies &&
          movies.map(({ id, original_title, title, backdrop_path }) => (
            <Item key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt={`logo of the film ${title}`}
                  width="240"
                />
                {original_title}
              </StyledLink>
            </Item>
          ))}
      </List>
    </div>
  );
};

export default Home;
