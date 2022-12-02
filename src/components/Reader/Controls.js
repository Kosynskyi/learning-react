import React from 'react';

export const Controls = ({ totalPublications, activePublication }) => {
  return (
    <p>
      {activePublication}/{totalPublications}
    </p>
  );
};
