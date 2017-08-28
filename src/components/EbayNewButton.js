import React from 'react';
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap';

const EbayNewButton = ({ onClick }) => {
  return (
    <Row style={{ marginTop:'1%' }}>
      <Col xs={12} sm={12} md={6} mdOffset={3}>
        <ButtonToolbar>
          {<Button
            onClick={onClick}
            style={{width:'100%'}}
            bsStyle="success"
          >
            Get New Ebay Listings
          </Button>}
        </ButtonToolbar>
      </Col>
    </Row>
  );
}

export default EbayNewButton;
