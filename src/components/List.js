import React from 'react';
import { Row, Col } from 'react-bootstrap';

const isSearched = (searchTerm) => {
  return (listItem) => {
    return listItem.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

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
