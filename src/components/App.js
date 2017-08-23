import React, { Component } from 'react';
import List from './List';
import Search from './Search';
import {testObjects} from './test-object';

class App extends Component {

  constructor (props) {

    super (props);

    this.state = {
      list: testObjects,
      searchTerm: ''
    }

    this.searchChange = this.searchChange.bind(this);
  }

  searchChange (event) {
    this.setState({searchTerm: event.target.value });
  }

  render () {

    const {list, searchTerm} = this.state;

    return (
      <div>
        <Search
          value={searchTerm}
          onChange={this.searchChange}
        />
        <List
          list={list}
          searchTerm={searchTerm}
        />
      </div>
    );
  }
}

export default App;
