import styles from './end-game.module.css';
import { Link } from './link';
import { Panel } from './panel';

type Props = {
  score: number;
  correctGuesses: number;
  total: number;
};

function EndGame({ score, correctGuesses, total }: Props): JSX.Element {
  return (
    <Panel>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>The end</h1>
        <div>
          <p>Your score: {score}</p>
          <p>
            Correct guesses: {correctGuesses} in {total}
          </p>
        </div>
        <Link href='/'>Restart</Link>
      </div>
    </Panel>
  );
}

export default EndGame;
