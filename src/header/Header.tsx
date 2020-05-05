import React from 'react';
import Icon from './Icon';
import { ReactComponent as Cog } from '../svg/cog.svg';
import { ReactComponent as History } from '../svg/history.svg';

export default function Header() {
  return (
    <header>
      <Icon icon={<Cog />} label='Settings' />
      <h1>Pomodoro Timer</h1>
      <Icon icon={<History />} label='History' />
    </header>
  );
}
