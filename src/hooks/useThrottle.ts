import { useEffect, useRef, useState } from 'react';

function useThrottle<T>(value: T, interval = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(Date.now());
  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      timerId.current = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval);
    }

    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [value, interval]);

  return throttledValue;
}

export default useThrottle;
