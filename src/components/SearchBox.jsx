import React from 'react';

const SearchBox = ({ onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
