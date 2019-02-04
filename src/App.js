/* eslint-disable no-unused-expressions */
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
  const cards = props.cards.map((card) => { return <Card key = {card.id} title={card.card.title} content={card.card.content} /> });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
      </div>
    </section>
  );
}

function App(props) {
  
  const grabCards = function(cardIds) {
    return cardIds.map(id => { return { id, card: props.store.allCards[id] } })
  };

  const lists = props.store.lists.map(list => {
    return <List key={list.id} cards={grabCards(list.cardIds)} header={list.header} />
  });

  return (
    <main className ="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;
