import React, { Component } from 'react';
import List from './List'
import STORE from './store';
import './App.css';

export default class App extends Component {
  state = STORE;

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state;
    const newList = lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    });
    delete allCards[cardId];
    this.setState({lists: newList, allCards});
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
  handleAddRandomCard = (id) => {
    const {lists, allCards} = this.state;
    const newCard = this.newRandomCard();
    const newCards = {...this.state.allCards, [newCard.id]: newCard}
    const newList = lists.map(list => { if (list.id === id) {
       list.cardIds.push(newCard);
    }   return list
  })
    this.setState({allCards: newCards, lists: newList});
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