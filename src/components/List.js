import React from 'react';

const isSearched = (searchTerm) => {
  return (listItem) => {
    return listItem.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

const List = ({list, searchTerm}) => {
  return (
      <div style={{marginTop: '3%', textAlign: 'center'}}>
        { list.filter(isSearched(searchTerm)).map((listItem) => {
            return (
              <div style={{marginBottom: '1%'}} key={listItem.objectID}>
                <span>{listItem.title}</span><br />
                <span>{listItem.description}</span><br />
                <span>${listItem.price}</span>
                <hr />
              </div>
            );
        }) }
      </div>
  );
}

export default List;
