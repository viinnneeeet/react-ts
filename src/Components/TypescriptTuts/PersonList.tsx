import React from 'react';
//Array of Object Props
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList: React.FC<PersonListProps> = (props) => {
  return (
    <div>
      {props.names.map((d, id) => (
        <span key={id}>
          {`${d.first}  ${d.last}`}
          <br />
        </span>
      ))}
    </div>
  );
};
