import { WhoIsThatPokemon } from 'components/who-is-that-pokemon';
import { fetchPokemon, fetchPokemonCount, Pokemon } from 'lib/poke-api';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  pokemon: Pokemon;
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const count = await fetchPokemonCount();
  const paths = [];

  for (let index = 0; index < count; index++) {
    const id = (index + 1).toString();
    paths.push({ params: { id } });
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

  const pokemon = await fetchPokemon(params.id);

  return {
    props: {
      pokemon,
    },
  };
}

function PokemonPage(props: Props): ReactNode {
  const { pokemon } = props;
  const nextId = parseInt(pokemon.id as string, 10) + 1;

  return (
    <>
      <Head>
        <title>Who's that Pokémon?</title>
      </Head>
      <WhoIsThatPokemon
        key={pokemon.id}
        pokemon={pokemon}
        nextId={nextId.toString()}
      />
    </>
  );
}

export default PokemonPage;
