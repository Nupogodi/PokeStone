import React, { useState } from 'react';

// Components
import Input from 'components/Input/Input';

const Filter = () => {
  const [searchString, setSearchString] = useState('');

  const handleInputChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <Input
      type="text"
      name="filterPokemon"
      id="filterPokemon"
      inputValue={searchString}
      onChange={handleInputChange}
      labelValue="Search"
      htmlFor="filterPokemon"
    />
  );
};

export default Filter;
