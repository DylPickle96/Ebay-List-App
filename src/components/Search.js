import React from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

// A form which based on what is entered into it filters our list
const Search = ({ value, onChange }) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} mdOffset={3}>
        <FormGroup style={{marginTop: '2%', textAlign: 'center', width: '100%'}}>
          <ControlLabel>Search</ControlLabel>
          <FormControl
            type='text'
            value={value}
            onChange={onChange}
          />
        </FormGroup>
      </Col>
    </Row>
  );
}

export default Search;
