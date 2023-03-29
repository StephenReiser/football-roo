import React from 'react';

const NameDisplay = ({ name }) => {
  return <p>The name {name} has {name.length} characters in it.</p>;
};

export default NameDisplay;