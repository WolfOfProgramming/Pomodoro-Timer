import React from 'react';

type ButtonProps = {
  className: 'Button Button--type-square' | 'Button Button--type-control';
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button type='button' onClick={onClick} className={className}>
      {label}
    </button>
  );
}
