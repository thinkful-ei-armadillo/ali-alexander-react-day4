import React, { Component } from 'react';
import List from './List'
import STORE from './store';
import './App.css';

export default class App extends Component {
  state = STORE;

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state;
    lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    });
    delete allCards[cardId];
    this.setState({lists, allCards});
  };

  grabLists = () => {
    return this.state.lists.map(list => (
      <List
        key={list.id}
        header={list.header}
        cards={list.cardIds.map(id => this.state.allCards[id])}
        onDelete={this.handleDeleteCard}
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