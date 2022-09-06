import React from 'react';

type Props = {
  children: JSX.Element;
};

export const Main: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};
