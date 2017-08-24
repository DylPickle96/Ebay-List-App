import React from 'react';
import { Row, Col } from 'react-bootstrap';

// this function returns only listItems that includes the searchTerm
const isSearched = (searchTerm) => {
  return (listItem) => {
    return listItem.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

// Return the list component based on the array that appears in our state
// As well as filter based on the searchTerm inputted from users.
// Bootstrap allows me to use their grid system to offset the list
// in the center of the page
const List = ({ list, searchTerm }) => {
  return (
    <Row style={{marginTop: '3%', textAlign: 'center'}}>
      { list.filter(isSearched(searchTerm)).map((listItem) => {
          return (
            <Col  xs={12} sm={12} md={6} mdOffset={3} key={listItem.objectID} >
                <span>{listItem.title}</span><br />
                <span>{listItem.description}</span><br />
                <span>${listItem.price}</span>
                <hr />
            </Col>
          );
      }) }
    </Row>
  );
}

export default List;
