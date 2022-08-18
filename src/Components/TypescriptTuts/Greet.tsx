import React from 'react';
type GreetProps = {
  name: string;
  messageCount?: number;
  isLogged: boolean;
};
export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  //imp
  return (
    <div>
      <h2>
        {props.isLogged
          ? ` Welcome ${props.name}! you have ${messageCount} unread messages`
          : 'Welcome Guest'}
      </h2>
    </div>
  );
};
