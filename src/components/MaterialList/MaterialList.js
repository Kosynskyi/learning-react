import React from 'react';
import { Material } from 'components/Material';

export const MaterialList = ({ items, onDelete, onUpdate }) => {
  // export const MaterialList = ({ items, ...otherProps - збираємо пропси разом, щоб прокинути далі(якщо однакові їх назви)}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Material item={item} onDelete={onDelete} onUpdate={onUpdate} />
          {/* <Material item={item} {...otherProps} - передаємо пропси далі/> */}
        </li>
      ))}
    </ul>
  );
};
