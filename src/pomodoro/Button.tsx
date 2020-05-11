import React from 'react';

export enum ButtonClasses {
  Btn = 'button',
  BtnSquare = 'button button--type-square',
  BtnControl = 'button button--type-control',
}

type Props = {
  label: string;
  className: ButtonClasses;
  onClick: () => void;
};

export default function Button({
  label,
  className = ButtonClasses.Btn,
  onClick,
}: Props) {
  return (
    <button type='button' onClick={onClick} className={className}>
      {label}
    </button>
  );
}
