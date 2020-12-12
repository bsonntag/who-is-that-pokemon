import classNames from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import styles from './pokemon-image.module.css';

type Props = {
  isRevealed: boolean;
  url: string;
};

export function PokemonImage({ isRevealed, url }: Props): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={classNames(styles.wrapper, loaded && styles.appear)}>
      <Image
        className={classNames(styles.image, isRevealed && styles.revealed)}
        src={url}
        width={500}
        height={500}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
