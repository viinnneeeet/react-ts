import React from 'react';
type HeadingProps = {
  children: string;
};
export const Heading = (prop: HeadingProps) => {
  return <h2>{prop.children}</h2>;
};
