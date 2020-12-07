import NextLink from 'next/link';
import { ReactNode } from 'react';
import { Button } from './button';

type Props = {
  href: string;
  children: ReactNode;
};

export function Link({ href, ...rest }: Props): JSX.Element {
  return (
    <NextLink href={href} passHref prefetch>
      <Button as={'a'} {...rest} />
    </NextLink>
  );
}
