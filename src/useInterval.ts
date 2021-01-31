import { useEffect, useState, useRef } from 'react';

export function useCountdown(callback: TimerHandler, delay = 1000) {
  const [running, setRunning] = useState(true);
  const savedCallback = useRef<TimerHandler | null>(null);
  const intervalId = useRef<number>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (running) {
      intervalId.current = window.setInterval(savedCallback.current!, delay);
    } else {
      window.clearInterval(intervalId.current);
    }
    return () => window.clearInterval(intervalId.current);
  }, [delay, running])
  return [() => setRunning(true), () => setRunning(false)];
}
