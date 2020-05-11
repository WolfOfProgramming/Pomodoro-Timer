import React from 'react';

type Props = {
  time: number;
};

function formatTime(time: number) {
  const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');

  return `${minutes}:${seconds}`;
}

export default function TimerDigits({ time }: Props) {
  const formattedTime: string = formatTime(time);
  return <time>{formattedTime}</time>;
}
