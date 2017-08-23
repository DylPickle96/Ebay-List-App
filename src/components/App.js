import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import List from './List';
import Search from './Search';
import DropDown from './DropDown';
import { choiceParser } from '../helpers/choice';
import { testObjects } from './test-object';

class App extends Component {

  constructor (props) {

    super (props);

    this.state = {
      list: testObjects,
      searchTerm: ''
    }

    this.searchChange = this.searchChange.bind(this);
    this.dropDownChange = this.dropDownChange.bind(this);
  }

  searchChange (event) {
    this.setState({ searchTerm: event.target.value });
  }

  dropDownChange (event) {

    const { list } = this.state;
    const choice = event.target.value;
    let newList;

    if (choice !== 'Choose an Option') {
      newList = choiceParser(list, choice);
    }

    this.setState({list: newList});
  }

  render () {

    const { list, searchTerm } = this.state;

    return (
      <Grid>
        <Search
          value={searchTerm}
          onChange={this.searchChange}
        />
        <DropDown
          onChange={this.dropDownChange}
        />
        <List
          list={list}
          searchTerm={searchTerm}
        />
      </Grid>
    );
  }
}

export default App;
