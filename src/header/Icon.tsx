import React from 'react';

type Props = {
  icon: React.ReactNode;
  label?: string;
};

export default function Icon({ icon, label }: Props) {
  return (
    <div>
      {icon}
      {label && <span>{label}</span>}
    </div>
  );
}
