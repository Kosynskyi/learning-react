import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInformationById } from 'services/API/API';
import { Box } from 'components/Box';
import {
  List,
  ActorName,
  Text,
  Span,
  ActorLinkWikipedia,
} from './Casts.styled';

const Casts = () => {
  const [castAndCrew, setCastAndCrew] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCastInformationById(movieId).then(setCastAndCrew);
  }, [movieId]);

  if (!castAndCrew) return;

  return (
    <Box>
      <List>
        {castAndCrew.cast.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={name}
              width="80"
            />
            <ActorName>
              <ActorLinkWikipedia
                href={`https://en.wikipedia.org/wiki/${name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </ActorLinkWikipedia>
            </ActorName>
            <Text>
              <Span>Character:</Span> {character}
            </Text>
          </li>
        ))}
      </List>
    </Box>
  );
};

export default Casts;
