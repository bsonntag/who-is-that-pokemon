import { Menu, StartMenu } from 'components/start-menu';
import { loadAllMode, loadGenerationModes } from 'lib/game-modes';
import { GetStaticPropsResult } from 'next';

type Props = {
  menu: Menu;
};

function getStartAndEnd(numbers: Array<number>) {
  return numbers.reduce(
    (result, current) => ({
      start: Math.min(result.start, current),
      end: Math.max(result.end, current),
    }),
    { start: Infinity, end: 0 }
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const allMode = await loadAllMode();
  const generationModes = await loadGenerationModes();

  return {
    props: {
      menu: [
        {
          label: allMode.name,
          href: '/' + allMode.slug,
          ...getStartAndEnd(allMode.ids),
        },
        ...generationModes.map(({ name, slug, ids }) => ({
          label: name,
          href: '/' + slug,
          ...getStartAndEnd(ids),
        })),
      ],
    },
  };
}

function HomePage(props: Props): JSX.Element {
  return <StartMenu {...props} />;
}

export default HomePage;
