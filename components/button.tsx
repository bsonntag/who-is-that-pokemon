import classNames from 'clsx';
import { useCssHeight } from 'hooks/css-measures';
import { ReactNode } from 'react';
import styles from './button.module.css';

type Props = {
  as?: React.ElementType;
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
};

export function Button(props: Props): JSX.Element {
  const { as, children, className, ...rest } = props;
  const ButtonComponent = as ?? 'button';
  const ref = useCssHeight<HTMLDivElement>();

  return (
    <ButtonComponent
      className={classNames(styles.wrapper, className)}
      {...rest}
    >
      <div>{children}</div>
      <div ref={ref} aria-hidden>
        {children}
      </div>
    </ButtonComponent>
  );
}
