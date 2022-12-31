import { useState } from 'react';
import { useGetPokemonByNameQuery } from 'redux/pokemon';
import { PokeBall } from './Pokemon.styled';

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isError, isUninitialized, refetch } =
    useGetPokemonByNameQuery(pokemonName, {
      skip: pokemonName === '',
      refetchOnFocus: true,
    });

  console.log('data ', data);
  console.log('error ', error);
  console.log('isError ', isError);
  console.log('isFetching ', isFetching);

  const handleSubmit = e => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    e.currentTarget.reset();
  };

  const showNotFoundError = isError && error.originalStatus === 404;
  const showPokemonData = data && !isFetching && !isError;

  return (
    <>
      <PokeBall width="40" height="40" />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>
      {isFetching && <p>Loading...</p>}
      {showNotFoundError && <p>Упс...покемона с именем {pokemonName} нету</p>}

      {showPokemonData && <h1>{data.name}</h1>}
      <button type="button" onClick={refetch} disabled={isUninitialized}>
        Resetch
      </button>
    </>
  );
};

export default Pokemon;
