import React, { ChangeEvent } from 'react';

type Props = {
  label: string;
  value: number;
  min: number;
  onChange: (value: number) => void;
};

export default function NumberInput({ label, value, onChange, min }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(Number(e.target.value));

  return (
    <label>
      {label}
      <input type='number' value={value} min={min} onChange={handleChange} />
    </label>
  );
}
