import React from 'react';

type ToggleProps = {
  label: string;
  isChecked: boolean;
  onClick: () => void;
};

export default function Toggle({ isChecked, label, onClick }: ToggleProps) {
  return (
    <React.Fragment>
      <input
        type='checkbox'
        id={label}
        name={label}
        checked={isChecked}
        onClick={onClick}
      />
      <label htmlFor={label}>{label}</label>
    </React.Fragment>
  );
}
