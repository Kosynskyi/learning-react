import { format } from 'date-fns';

// import { uk } from 'date-fns/locale'; третій параметр у функції передається об'єкт { locale: ru } (за змовчуванням en)

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};
