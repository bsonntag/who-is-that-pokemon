import { PokemonImage } from 'components/pokemon-image';
import levenshteinDistance from 'leven';
import { Pokemon } from 'lib/poke-api';
import { useEffect, useState } from 'react';
import { Button } from './button';
import { Field } from './field';
import styles from './who-is-that-pokemon.module.css';
import useCountdown from 'react-use-countdown';
import parseMs from 'parse-ms';
import { useCssHeight } from 'hooks/css-measures';

type Props = {
  isLoading: boolean;
  pokemon: Pokemon;
  imageUrl: string;
  score: number;
  onSuccess: () => void;
  onFailure: () => void;
  onNext: () => void;
};

function getResult(rating: number): string {
  switch (rating) {
    case 0:
      return 'Yes!';
    case 1:
      return 'Close!';
    case 2:
    case 3:
      return 'Not quite...';
    default:
      return 'No...';
  }
}

export function WhoIsThatPokemon(props: Props): JSX.Element {
  const {
    isLoading,
    score,
    pokemon,
    imageUrl,
    onSuccess,
    onFailure,
    onNext,
  } = props;

  const [isGuessed, setGuessed] = useState(false);
  const [rating, setRating] = useState(0);
  const [isTimedOut, setTimedOut] = useState(false);
  const ref = useCssHeight<HTMLDivElement>();
  const countdown = useCountdown(() => Date.now() + 15000);
  const { seconds } = parseMs(countdown);

  useEffect(() => {
    if (seconds === 0 && !isGuessed) {
      setTimedOut(true);
    }
  }, [isGuessed, seconds]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.display}>
        <div ref={ref} className={styles.displayContent}>
          <h1 className={styles.title}>Who's that Pokémon?</h1>
          <div className={styles.imageWrapper}>
            {isLoading ? null : (
              <PokemonImage
                url={imageUrl}
                isRevealed={isGuessed || isTimedOut}
              />
            )}
          </div>
        </div>
      </div>

      <div className={styles.formWrapper}>
        <p className={styles.score}>Score: {score}</p>

        {isLoading ? null : (
          <>
            {isGuessed || isTimedOut ? (
              <div>
                <p>
                  {isTimedOut ? 'Too slow!' : getResult(rating)} It's{' '}
                  {pokemon.name}!
                </p>
                <Button type='button' onClick={onNext}>
                  Next
                </Button>
              </div>
            ) : (
              <>
                <p>Remaining time: {seconds}s</p>
                <form
                  id={'guess-form'}
                  className={styles.form}
                  onSubmit={(event) => {
                    event.preventDefault();
                    const form = event.target as HTMLFormElement;
                    const guess = form.elements.namedItem(
                      'guess'
                    ) as HTMLInputElement;
                    // TODO: Handle Nidorans better...
                    const distance = levenshteinDistance(
                      pokemon.name.toLocaleLowerCase(),
                      guess.value.toLocaleLowerCase()
                    );
                    setGuessed(true);
                    setRating(distance);
                    if (distance === 0) {
                      onSuccess();
                    } else if (distance > 3) {
                      onFailure();
                    }
                  }}
                >
                  <Field
                    label='Your guess:'
                    name='guess'
                    autoComplete={'off'}
                  />
                  <Button type='submit'>Submit</Button>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
