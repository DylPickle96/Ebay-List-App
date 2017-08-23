import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const isSearched = (searchTerm) => {
  return (listItem) => {
    return listItem.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

const List = ({list, searchTerm}) => {
  return (
        <Grid style={{marginTop: '3%', textAlign: 'center'}}>
          <Row>
            { list.filter(isSearched(searchTerm)).map((listItem) => {
                return (
                  <Col md={6} mdOffset={3} key={listItem.objectID} >
                      <span>{listItem.title}</span><br />
                      <span>{listItem.description}</span><br />
                      <span>${listItem.price}</span>
                      <hr />
                  </Col>
                );
            }) }
          </Row>
        </Grid>
  );
}

export default List;
