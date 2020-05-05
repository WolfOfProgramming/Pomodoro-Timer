import React from 'react';

type TimerControlsProps = {
  children: React.ReactNode;
};

export default function TimerControls({ children }: TimerControlsProps) {
  return <div className='TimerControls'>{children}</div>;
}
