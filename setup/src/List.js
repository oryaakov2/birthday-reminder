import React from 'react';
import Person from './Person';

const List = (props) => {

  return (
    <>
      <h3>{props.data.length} birthdays today</h3>
      <ul>
        {props.data.map((person) => (
          <Person key={person.id} {...person} />
        ))}
      </ul>
    </>
  )
}

export default List;
