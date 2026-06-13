declare module 'use-debounce' {
  type DebouncedState<T extends (...args: any) => any> = {
    (...args: Parameters<T>): ReturnType<T> | undefined;
    cancel: () => void;
    isPending: () => boolean;
    flush: () => ReturnType<T> | undefined;
  };

  export function useDebounce<T>(
    value: T,
    delay: number,
    options?: {
      maxWait?: number;
      leading?: boolean;
      trailing?: boolean;
      equalityFn?: (left: T, right: T) => boolean;
    },
  ): [T, DebouncedState<(value: T) => void>];
}
