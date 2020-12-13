import { fetchPokemon, getPokemonImageUrl } from 'lib/poke-api';
import { random } from 'lodash';
import Head from 'next/head';
import React, { useReducer } from 'react';
import { useQuery } from 'react-query';
import EndGame from './end-game';
import { WhoIsThatPokemon } from './who-is-that-pokemon';

type Props = {
  ids: Array<number>;
};

function extractRandomItem<I>(items: Array<I>): [I, Array<I>] {
  const extractedItem = items[random(items.length - 1)];
  const remaining = items.filter((item) => item !== extractedItem);
  return [extractedItem, remaining];
}

function getNextAndRemaining(ids: Array<number>) {
  if (ids.length === 0) {
    return { nextId: null, remainingIds: [] };
  }
  const [nextId, remainingIds] = extractRandomItem(ids);
  return { nextId, remainingIds };
}

type State = {
  score: number;
  correctGuesses: number;
  currentId: number | null;
  nextId: number | null;
  remainingIds: Array<number>;
};

enum Action {
  Success,
  Failure,
  Next,
}

function reducer(state: State, action: Action) {
  switch (action) {
    case Action.Next: {
      const { nextId, remainingIds } = state;
      if (nextId == null) {
        return {
          ...state,
          currentId: null,
          nextId: null,
          remainingIds: [],
        };
      }
      return {
        ...state,
        currentId: nextId,
        ...getNextAndRemaining(remainingIds),
      };
    }

    case Action.Success:
      return {
        ...state,
        score: state.score + 2,
        correctGuesses: state.correctGuesses + 1,
      };

    case Action.Failure:
      return {
        ...state,
        score: state.score - 1,
      };

    default:
      return state;
  }
}

function initialize(ids: Array<number>): State {
  const [currentId, nextIds] = extractRandomItem(ids);
  const [nextId, remainingIds] = extractRandomItem(nextIds);
  return {
    score: 0,
    correctGuesses: 0,
    currentId,
    nextId,
    remainingIds,
  };
}

function pokemonQuery(key: string, id: number) {
  return fetchPokemon(id);
}

export function Game(props: Props): JSX.Element {
  const { ids } = props;
  const [state, dispatch] = useReducer(reducer, ids, initialize);
  const { score, correctGuesses, currentId, nextId } = state;
  const { data: pokemon, isLoading } = useQuery(
    ['pokemon', currentId],
    pokemonQuery,
    { cacheTime: Infinity, staleTime: Infinity, enabled: currentId }
  );
  // Prefetch next pokemon to avoid loading time.
  useQuery(['pokemon', nextId], pokemonQuery, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: nextId,
  });

  if (!currentId) {
    return (
      <EndGame
        score={score}
        correctGuesses={correctGuesses}
        total={ids.length}
      />
    );
  }

  return (
    <>
      <Head>
        <title>Who's that Pokémon?</title>
      </Head>

      {pokemon ? (
        <WhoIsThatPokemon
          key={pokemon.id}
          isLoading={isLoading}
          pokemon={pokemon}
          imageUrl={getPokemonImageUrl(pokemon.id)}
          score={score}
          onNext={() => dispatch(Action.Next)}
          onSuccess={() => dispatch(Action.Success)}
          onFailure={() => dispatch(Action.Failure)}
        />
      ) : null}
    </>
  );
}
