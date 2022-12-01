import React from 'react';

export const EditMaterialModal = ({ closeModal, onEdit }) => {
  return (
    <div>
      <h2>Модалка редактирования материала</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          closeModal();
        }}
      >
        Редактировать с помощью модалки
      </button>
      <button type="button" onClick={closeModal}>
        Закрыть
      </button>
    </div>
  );
};
