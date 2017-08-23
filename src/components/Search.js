import React from 'react';

const Search = ({value, onChange}) => {
  return (
    <form style={{marginTop: '2%', textAlign: 'center', width: '100%'}}>
      <input
        type='text'
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

export default Search;
