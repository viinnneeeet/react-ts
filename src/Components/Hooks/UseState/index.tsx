import React, { useEffect, useState } from 'react';

//  useState is a Hook that allows you to have state variables in functional components.
//  You pass the initial state to this function and it returns a variable with the current state value   (not necessarily the initial state) and another function to update this value
type state = {
  person: {
    name: string;
    age: number;
    url: string;
    note?: string; // optional
  }[];
  car: {
    company: string;
    speed: number;
    milage: number;
  }[];
};
export const UseState = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState<state['person']>([]);
  const [car, setCar] = useState<state['car']>([]);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setPerson([
      { name: 'vineet', age: 29, url: 'www.vineet.com' },
      { name: 'xyz', age: 22, url: 'www.xyz.com' },
    ]);
    setCar([{ company: 'BMW', milage: 20, speed: 140 }]);
  }, []);

  return (
    <div>
      {person.map((data, id) => (
        <div key={id}>{data.age}</div>
      ))}
    </div>
  );
};
