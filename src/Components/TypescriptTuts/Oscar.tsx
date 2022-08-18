import React from 'react';
type OscarProps = {
  children: React.ReactNode;
};
export const Oscar: React.FC<OscarProps> = (prop: OscarProps) => {
  return <div>{prop.children}</div>;
};
