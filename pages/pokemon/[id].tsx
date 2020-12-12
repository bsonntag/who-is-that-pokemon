import { WhoIsThatPokemon } from 'components/who-is-that-pokemon';
import { fetchPokemon, fetchPokemonCount, Pokemon } from 'lib/poke-api';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { random } from 'lodash';

type Props = {
  nextId: string;
  pokemon: Pokemon;
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const count = await fetchPokemonCount();
  const paths = [];

  for (let index = 0; index < count; index++) {
    const id = (index + 1).toString();
    paths.push({
      params: {
        id: Buffer.from(id).toString('base64'),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
): Promise<GetStaticPropsResult<Props>> {
  const { params } = context;

  if (!params) {
    return { notFound: true };
  }

  const count = await fetchPokemonCount();
  const pokemon = await fetchPokemon(
    Buffer.from(params.id, 'base64').toString('ascii')
  );

  const nextId = Buffer.from(random(1, count).toString()).toString('base64');

  return {
    props: {
      pokemon,
      nextId,
    },
  };
}

function PokemonPage(props: Props): ReactNode {
  const { nextId, pokemon } = props;
  const [score, setScore] = useState(0);

  return (
    <>
      <Head>
        <title>Who's that Pokémon?</title>
      </Head>
      <WhoIsThatPokemon
        key={pokemon.id}
        pokemon={pokemon}
        nextId={nextId.toString()}
        score={score}
        onSuccess={() => setScore((current) => current + 2)}
        onFailure={() => setScore((current) => Math.max(current - 1, 0))}
      />
    </>
  );
}

export default PokemonPage;
