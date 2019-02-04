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

function App() {
  return (
    <main className='App'>
      {/* content goes here */}
    </main>
  );
}

export default App;
