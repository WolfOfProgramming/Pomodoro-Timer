import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  const tick = () => {
    savedCallback.current();
  };

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const intervalID = setInterval(tick, delay);

      return () => clearInterval(intervalID);
    }
  }, [delay]);
}
