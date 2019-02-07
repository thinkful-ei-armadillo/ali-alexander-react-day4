import React, { Component } from 'react';
import List from './List'
import STORE from './store';
import './App.css';

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

export default class App extends Component {
  state = STORE;

  handleDeleteCard = (cardId) => {
    const newList = this.state.lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    });
    const newCards = omit(this.state.allCards, cardId);
    this.setState({lists: newList, allCards: newCards});
  };

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  handleAddRandomCard = (listId) => {
    const newCard = this.newRandomCard();
    const newCards = {...this.state.allCards, [newCard.id]: newCard}
    const newList = this.state.lists.map(list => { 
      if (list.id === listId) {
       return {
         ...list,
         cardIds: [...list.cardIds, newCard.id]
       };
      }   
      return list
    });
    this.setState({lists: newList, allCards:newCards});
}
  grabLists = () => {
    return this.state.lists.map(list => (
      <List
        key={list.id}
        id={list.id}
        header={list.header}
        cards={list.cardIds.map(id => this.state.allCards[id])}
        onDelete={this.handleDeleteCard}
        onRandom={this.handleAddRandomCard}
      />
    ));
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.grabLists()}
        </div>
      </main>
    );
  }
}