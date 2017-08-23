import React from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

const Search = ({ value, onChange }) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} mdOffset={3}>
        <form style={{marginTop: '2%', textAlign: 'center', width: '100%'}}>
          <FormControl
            type='text'
            value={value}
            onChange={onChange}
          />
        </form>
      </Col>
    </Row>
  );
}

export default Search;
