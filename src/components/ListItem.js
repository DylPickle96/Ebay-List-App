import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { Row, Col } from 'react-bootstrap';

// sets where the listItem came from
const listItemSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  },
}

// as the listItem hovers this function sets and the current target as the
// item moves down the list once it passes 50% of the width of a given listItem
const listItemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveListItem(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
}

function decimalPlaces(num) {
  if(Math.floor(num) === num) return 0;
  return num.toString().split(".")[1].length || 0;
}

class ListItem extends Component {

  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    moveListItem: PropTypes.func.isRequired
  };

  render () {

    const { title,
            price,
            location,
            picture,
            url,
            category,
            startdate,
            isDragging,
            connectDragSource,
            connectDropTarget
          } = this.props;

    const opacity = isDragging ? 0 : 1;

    return connectDropTarget(connectDragSource(
      <div>
        <Row style={{marginTop: '3%', textAlign: 'center', opacity: opacity}}>
          <Col  xs={12} sm={12} md={6} mdOffset={3} >
              <a href={url} target='_blank' style={{color:'black'}}>{title}</a><br />
              <span>{location}</span><br />
              <a href={url} target='_blank'><img src={picture} alt={title}></img></a><br />
              <span>${decimalPlaces(price) === 1 ? price + 0.00 : price}</span><br />
              <span>{category}</span><br />
              <span>{new Date(startdate).toString()}</span>
              <hr />
          </Col>
        </Row>
      </div>
    ));
  }
}

const ItemTypes = {
  LISTITEM: 'listItem'
}

// drop target and drop source each of which takes three parameters:
// (type, spec, collect)
// type: takes a single object which has a key/value part which is equal to some
// string. Only sources with the same type as a drop target will work
// spec: an object with a few methods to describe how the drag and drop event
// should behave.
// collect: injects props into my component for the drag and drop functionality
// to use.
ListItem = DropTarget(ItemTypes.LISTITEM,
                          listItemTarget,
                          connect => ({
                            connectDropTarget: connect.dropTarget() })
                      )(ListItem);

ListItem = DragSource(ItemTypes.LISTITEM,
                      listItemSource,
                      (connect, monitor) => ({
                        connectDragSource: connect.dragSource(),
                        isDragging: monitor.isDragging() })
                      )(ListItem);

export default ListItem;
