import classNames from 'clsx';
import { useLayoutEffect, useRef } from 'react';
import styles from './field.module.css';

type Props = {
  label: string;
  name: string;
  className?: string;
  autoComplete?: string;
};

export function Field(props: Props): JSX.Element {
  const { label, name, className, ...rest } = props;
  const ref = useRef<HTMLLabelElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    const width = element.getBoundingClientRect().width;
    element.style.setProperty(
      '--gradient-distance',
      `calc(${width}px * var(--cos-angle))`
    );
  }, []);

  return (
    <div className={classNames(styles.wrapper, className)}>
      <label className={styles.content}>
        <span ref={ref}>{label}</span>
        <input className={styles.input} name={name} {...rest} />
      </label>
    </div>
  );
}
