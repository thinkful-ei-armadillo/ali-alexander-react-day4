import React from 'react';

function Card(props) {
  return (
    <div className="Card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
  );
}

function List(props) {
  // const cards = [<Card />, <Card />];

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards}
      </div>
    </section>
  );
}

function App(props) {
  
  const lists = props.store.lists.map(list => {
    <List key={list.id} cards={list.cardIds} header={list.headers} />
  })

  return (
    <main className ="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;
