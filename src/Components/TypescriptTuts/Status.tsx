import React from 'react';
type StatusProps = {
  status: 'loading' | 'success' | 'error';
};
export const Status = (props: StatusProps) => {
  let messsage;
  if (props.status === 'loading') {
    messsage = 'loading...';
  } else if (props.status === 'success') {
    messsage = 'data fetched successfully';
  } else if (props.status === 'error') {
    messsage = 'Error fetching data';
  }
  return (
    <div>
      <h2>{messsage}</h2>
    </div>
  );
};
