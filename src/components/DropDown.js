import React from 'react';
import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';

// A drop down menu which will sort our list based on the options given
const DropDown = ({ onChange, sortOptions, name }) => {
  return (
    <Row style={{ marginTop:'1%', textAlign:'center' }}>
      <Col xs={12} sm={12} md={6} mdOffset={3}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>{name}</ControlLabel>
          <FormControl
            componentClass="select"
            onChange={onChange}
            >
            <option defaultValue="selected">Choose an Option</option>
            {
              sortOptions.map( (option, i) => {
                return (
                  <option value={option} key={i}>{option}</option>
                );
              })
            }
          </FormControl>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default DropDown;
