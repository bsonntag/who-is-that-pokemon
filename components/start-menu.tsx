import { useMachine } from '@xstate/react';
import classNames from 'clsx';
import { useCssWidth } from 'hooks/css-measures';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import styles from './start-menu.module.css';
import { createMachine } from 'xstate';

type MenuItem = {
  label: string;
  start: number;
  end: number;
  href: string;
};

export type Menu = Array<MenuItem>;

type Props = {
  menu: Menu;
};

type MenuLinkProps = {
  children: ReactNode;
  href: string;
  isActive: boolean;
  onPress: () => void;
};

function MenuLink(props: MenuLinkProps) {
  const { children, href, isActive, onPress } = props;
  const ref = useCssWidth<HTMLAnchorElement>();

  return (
    <Link href={href} passHref>
      <a // eslint-disable-line jsx-a11y/no-static-element-interactions
        // href is injected by the `Link` component
        className={classNames(
          styles.menuItem,
          isActive && styles.menuItemActive
        )}
        ref={ref}
        onClick={onPress}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            onPress();
          }
        }}
      >
        {children}
      </a>
    </Link>
  );
}

const interactionMachine = createMachine({
  initial: 'idle',
  on: {
    choose: '.chosen',
  },
  states: {
    idle: {
      on: {
        interaction: 'interaction',
      },
    },
    interaction: {
      on: {
        interactionLost: 'interactionLost',
      },
    },
    interactionLost: {
      after: {
        250: 'idle',
      },
      on: {
        interaction: 'interaction',
      },
    },
    chosen: {
      type: 'final',
    },
  },
});

export function StartMenu(props: Props): JSX.Element {
  const { menu } = props;
  const [state, send] = useMachine(interactionMachine);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Start game</h1>

      <ul
        className={styles.menuList}
        onFocus={() => send('interaction')}
        onMouseEnter={() => send('interaction')}
        onBlur={() => send('interactionLost')}
        onMouseLeave={() => send('interactionLost')}
      >
        {menu.map((item, index) => (
          <li key={index}>
            <MenuLink
              href={item.href}
              isActive={state.matches('idle') && index === 0}
              onPress={() => send('choose')}
            >
              <span>{item.label}</span>
              <span className={styles.menuItemNumbers}>
                <span className='visually-hidden'>, from number </span>
                {item.start}
                <span aria-label=' to number '>-</span>
                {item.end}
              </span>
            </MenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
