import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'react/lib/update';
import ListItem from './ListItem';
import Search from './Search';
import DropDown from './DropDown';
import { choiceParser } from '../helpers/choice';
import { ebayRequest } from '../helpers/requests';
// import { testObjects } from './test-object';

// this function returns only listItems that includes the searchTerm
const isSearched = (searchTerm) => {
  return (listItem) => {
    return listItem.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

const isCategory = (category) => {
  return (listItem) => {
    if (category !== '') {
      return listItem.category === category;
    }
    else {
      return ListItem
    }
  }
}
class App extends Component {

  constructor (props) {

    super (props);

    this.state = {
      list: [],
      searchTerm: '',
      sortOptions: [
                      'Low to High',
                      'High to Low',
                      'Alphabetical Order',
                      'Oldest to Newest',
                      'Newest to Oldest'
                   ],
      category: '',
      categories: []
    }

    this.searchChange = this.searchChange.bind(this);
    this.sortDropDownChange = this.sortDropDownChange.bind(this);
    this.categoryDropDownChange = this.categoryDropDownChange.bind(this);
    this.moveListItem = this.moveListItem.bind(this);
    this.grabCategories = this.grabCategories.bind(this);
  }

  // sets the state of searchTerm as the value in the form changes
  searchChange (event) {
    this.setState({ searchTerm: event.target.value });
  }

  // based on what choice is selected in the drop down
  sortDropDownChange (event) {

    const { list } = this.state;
    const choice = event.target.value;
    let newList;
    // The choice will be parsed and a newList will be created
    if (choice !== 'Choose an Option') {
      newList = choiceParser(list, choice);

      // the state of the list is changed
      this.setState({ list: newList });
    }
  }

  categoryDropDownChange (event) {
    if (event.target.value === 'Choose an Option') {
      this.setState({ category: '' });
    }
    else {
      this.setState({ category: event.target.value });
    }
  }

  // handles of the movement of listItems as they are dragged across the list
  moveListItem (dragIndex, hoverIndex) {

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

  grabCategories (list) {
    const categories = [];

    list.forEach(function (object) {
      return (
        categories.push(object.category)
      );
    });

    return categories;
  }

  componentWillMount () {
    ebayRequest()
      .then(ebayObjects => {
        let i = 0;
        // adds an ID to each of our 10 objects
        // needed for the drag and drop functionality
        ebayObjects.map(function (ebayObject) {
          const objectIDs = [1,2,3,4,5,6,7,8,9,10];
          ebayObject['objectID'] = objectIDs[i];
          i += 1;
          return ebayObject
        })
        // list gets set to ebay objects
        this.setState({list: ebayObjects }, function () {
          const categories = this.grabCategories(this.state.list);
          this.setState({categories: categories});
        });
      });
  }

  render () {

    const { list, searchTerm, sortOptions, category, categories } = this.state;

    return (
      <Grid>
        <Search
          value={searchTerm}
          onChange={this.searchChange}
        />
        <DropDown
          onChange={this.sortDropDownChange}
          sortOptions={sortOptions}
          name={'Sort list'}
        />
        <DropDown
          onChange={this.categoryDropDownChange}
          sortOptions={categories}
          name={'Choose a Category'}
        />
        {
          /*

          We filter the list based on the searchTerm which is what the user
          types into the top form. That combined with the dropdown menu the list
          gets mapped to its desired state. We also pass all props needed for
          displaying information and for the drag and drop functionality.

          */
        }
        { list.filter(isSearched(searchTerm)).filter(isCategory(category)).map((listItem, i) => {
            return (
              <ListItem
                key={listItem.objectID}
                title={listItem.title}
                location={listItem.location}
                price={listItem.price}
                picture={listItem.picture}
                category={listItem.category}
                startdate={listItem.startdate}
                url={listItem.url}
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
