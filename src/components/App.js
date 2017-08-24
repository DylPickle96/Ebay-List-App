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

  // sets the state of searchTerm as the value in the form changes
  searchChange (event) {
    this.setState({ searchTerm: event.target.value });
  }

  // based on what choice is selected in the drop down
  dropDownChange (event) {

    const { list } = this.state;
    const choice = event.target.value;
    let newList;
    // The choice will be parsed and a newList will be created
    if (choice !== 'Choose an Option') {
      newList = choiceParser(list, choice);

      // the state of the list is changed
      this.setState({list: newList});
    }
  }

  // render our Components and give them their props
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
