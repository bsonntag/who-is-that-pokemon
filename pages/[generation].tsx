import { Game } from 'components/game';
import { loadGenerationModes } from 'lib/game-modes';
import { fetchGeneration } from 'lib/poke-api';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import React from 'react';

type Props = {
  ids: Array<number>;
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const generationModes = await loadGenerationModes();

  return {
    fallback: false,
    paths: generationModes.map(({ slug }) => '/' + slug),
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ generation: string }>
): Promise<GetStaticPropsResult<Props>> {
  const { params } = context;

  if (!params) {
    return { notFound: true };
  }

  const { generation: slug } = params;
  const { ids } = await fetchGeneration(slug);

  return {
    props: { ids },
  };
}

function GenerationPage(props: Props): JSX.Element {
  return <Game {...props} />;
}

export default GenerationPage;
