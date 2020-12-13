import { Game } from 'components/game';
import { loadAllMode } from 'lib/game-modes';
import { GetStaticPropsResult } from 'next';

type Props = {
  ids: Array<number>;
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const { ids } = await loadAllMode();

  return {
    props: { ids },
  };
}

function AllPage(props: Props): JSX.Element {
  return <Game {...props} />;
}

export default AllPage;
