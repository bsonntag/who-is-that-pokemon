import styles from './panel.module.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Panel({ children }: Props): JSX.Element {
  return <div className={styles.wrapper}>{children}</div>;
}
