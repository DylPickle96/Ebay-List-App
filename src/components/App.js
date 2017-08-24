import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'react/lib/update';
import ListItem from './ListItem';
import Search from './Search';
import DropDown from './DropDown';
import { choiceParser } from '../helpers/choice';
import { testObjects } from './test-object';

// this function returns only listItems that includes the searchTerm
const isSearched = (searchTerm) => {
  return (listItem) => {
    return listItem.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class App extends Component {

  constructor (props) {

    super (props);

    this.state = {
      list: testObjects,
      searchTerm: ''
    }

    this.searchChange = this.searchChange.bind(this);
    this.dropDownChange = this.dropDownChange.bind(this);
    this.moveListItem = this.moveListItem.bind(this);
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

  // handles of the movement of listItems as they are dragged across the list
  moveListItem(dragIndex, hoverIndex) {

    const { list } = this.state;
    const dragListItem = list[dragIndex];

    this.setState(update(this.state, {
      list: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragListItem]
        ]
      }
    }));
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

        {/*

          We filter the list based on the searchTerm which is what the user
          types into the top form. That combined with the dropdown menu the list
          gets mapped to its desired state. We also pass all props needed for
          displaying information and for the drag and drop functionality. 

          */}
        { list.filter(isSearched(searchTerm)).map((listItem, i) => {
            return (
              <ListItem
                key={listItem.objectID}
                title={listItem.title}
                description={listItem.description}
                price={listItem.price}
                index={i}
                id={listItem.objectID}
                moveListItem={this.moveListItem}
              />
            );
          }) }
      </Grid>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
