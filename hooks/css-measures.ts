import { RefObject, useEffect, useLayoutEffect, useRef } from 'react';

// TODO: Figure a better way to silence the warning.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useCssWidth<E extends HTMLElement>(
  propertyName = '--element-width'
): RefObject<E> {
  const ref = useRef<E>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    const width = element.getBoundingClientRect().width;
    element.style.setProperty(propertyName, `${width}px`);
  }, []);

  return ref;
}

export function useCssHeight<E extends HTMLElement>(
  propertyName = '--element-height'
): RefObject<E> {
  const ref = useRef<E>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    const height = element.getBoundingClientRect().height;
    element.style.setProperty(propertyName, `${height}px`);
  }, []);

  return ref;
}
