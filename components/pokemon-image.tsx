import classNames from 'clsx';
import Image from 'next/image';
import styles from './pokemon-image.module.css';

type Props = {
  isRevealed: boolean;
  url: string;
};

export function PokemonImage({ isRevealed, url }: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Image
        className={classNames(styles.image, isRevealed && styles.revealed)}
        src={url}
        width={500}
        height={500}
      />
    </div>
  );
}
