import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [persons, setPersons] = useState(data)

  const onClickHandler = () => {
    setPersons([])
  }

  return (
    <main>
      <section className='container'>
        <List data={persons} />
        <button className='button' onClick={onClickHandler}>Clear All</button>
      </section>
    </main>
  )
}

export default App;
