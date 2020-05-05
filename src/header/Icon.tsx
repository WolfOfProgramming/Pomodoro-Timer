import React from 'react';

type IconProps = {
  icon: React.ReactNode;
  label: string;
};

export default function Icon({ icon, label }: IconProps) {
  return (
    <div>
      {icon}
      <span>{label}</span>
    </div>
  );
}
