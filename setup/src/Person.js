import React from 'react';
import './index.css';

const Person = ({ name, age, image }) => {
    return (
        <article className='person'>
            <img src={image} alt="person"></img>
            <div>
                <h4>{name}</h4>
                <p>{age} years old</p>
            </div>
        </article>
    );
}

export default Person;