import classNames from 'clsx';
import styles from './field.module.css';
import { useCssWidth } from 'hooks/css-measures';

type Props = {
  label: string;
  name: string;
  className?: string;
  autoComplete?: string;
};

export function Field(props: Props): JSX.Element {
  const { label, name, className, ...rest } = props;
  const ref = useCssWidth<HTMLSpanElement>();

  return (
    <div className={classNames(styles.wrapper, className)}>
      <label className={styles.content}>
        <span ref={ref}>{label}</span>
        <input className={styles.input} name={name} {...rest} />
      </label>
    </div>
  );
}
