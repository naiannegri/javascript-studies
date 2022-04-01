import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data)
  return <main> 
    <section class="container">
      <h3>{people.length} Aniversariantes no dia!</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>limpar tudo</button>
    </section>
  </main>;

}

export default App;
