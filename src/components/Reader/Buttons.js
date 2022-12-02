import React from 'react';

export const Buttons = ({ prev, next, activeIndex, totalPublications }) => {
  return (
    <>
      <button
        type="button"
        onClick={prev}
        //   disabled={activeIndex === 0}
      >
        Назад
      </button>
      <button
        type="button"
        onClick={next}
        // disabled={activeIndex === totalPublications - 1}
      >
        Вперед
      </button>
    </>
  );
};
