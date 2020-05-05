import React from 'react';

type IncreaseTimeContainerProps = {
  children: React.ReactNode;
};

export default function IncreaseTimeContainer({
  children,
}: IncreaseTimeContainerProps) {
  return <div className='IncreaseTimeContainer'>{children}</div>;
}
