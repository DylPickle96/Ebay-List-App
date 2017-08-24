import React from 'react';
import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';

// A drop down menu which will sort our list based on the options given
const DropDown = ({ onChange }) => {
  return (
    <Row style={{ marginTop:'1%', textAlign:'center' }}>
      <Col xs={12} sm={12} md={6} mdOffset={3}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Sort</ControlLabel>
          <FormControl
            componentClass="select"
            onChange={onChange}
            >
            <option defaultValue="selected">Choose an Option</option>
            <option value='Low to High'>Low to High</option>
            <option value='High to Low'>High to Low</option>
            <option value='Alphabetical Order'>Alphabetical Order</option>
          </FormControl>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default DropDown;
