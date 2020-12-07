import { Link } from 'components/link';
import { PokemonImage } from 'components/pokemon-image';
import { useInclineDifference } from 'hooks/use-incline-difference';
import levenshteinDistance from 'leven';
import { Pokemon } from 'lib/poke-api';
import { useState } from 'react';
import { Button } from './button';
import { Field } from './field';
import styles from './who-is-that-pokemon.module.css';

type Props = {
  pokemon: Pokemon;
  nextId: string;
};

function getResult(rating: number): string {
  switch (rating) {
    case 5:
      return 'Yes!';
    case 4:
      return 'Close!';
    case 3:
    case 2:
      return 'Not quite...';
    default:
      return 'No...';
  }
}

export function WhoIsThatPokemon(props: Props): JSX.Element {
  const { pokemon, nextId } = props;
  const [isGuessed, setGuessed] = useState(false);
  const [rating, setRating] = useState(0);
  const ref = useInclineDifference<HTMLDivElement>();

  return (
    <div className={styles.wrapper}>
      <div className={styles.display}>
        <div ref={ref} className={styles.displayContent}>
          <h1 className={styles.title}>Who's that Pokémon?</h1>
          <div className={styles.imageWrapper}>
            <PokemonImage url={pokemon.imageUrl} isRevealed={isGuessed} />
          </div>
        </div>
      </div>

      <div className={styles.formWrapper}>
        {isGuessed ? (
          <div>
            <p>
              {getResult(rating)} It's {pokemon.name}!
            </p>
            <Link href={'/pokemon/' + nextId}>Next</Link>
          </div>
        ) : (
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
              setRating(Math.max(5 - distance, 0));
            }}
          >
            <Field label='Your guess:' name='guess' autoComplete={'off'} />
            <Button type='submit'>Submit</Button>
          </form>
        )}
      </div>
    </div>
  );
}
