import React from 'react';

type NumberInputProps = {
  label: string;
  value: number;
  onChange: (x: number) => void;
};

export default function NumberInput({
  label,
  value,
  onChange,
}: NumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (Number.isSafeInteger(Number(value))) {
      onChange(Number(value));
    }
  };

  return (
    <React.Fragment>
      <input
        type='text'
        id={label}
        name={label}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={label}>{label}</label>
    </React.Fragment>
  );
}
