import { RefObject, useEffect, useLayoutEffect, useRef } from 'react';

// TODO: Figure a better way to silence the warning.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useInclineDifference<E extends HTMLElement>(): RefObject<E> {
  const ref = useRef<E>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    const height = element.getBoundingClientRect().height;
    console.log('button height', height);
    element.style.setProperty(
      '--incline-difference',
      `calc(${height}px * var(--tan-angle))`
    );
  }, []);

  return ref;
}
