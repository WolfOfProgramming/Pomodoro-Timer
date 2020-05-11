import React, { ChangeEvent } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Input({ label, value, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <label>
      {label}
      <input type='text' value={value} onChange={handleChange} />
    </label>
  );
}
