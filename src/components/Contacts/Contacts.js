import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/Contacts/contactSlice';
import { selectFilterValue } from 'redux/Filter/filterSelector';
import ContactItem from './ContactItem';
import { Title, ContactList } from './Contacts.styled';

export const Contacts = () => {
  const { data, error, isLoading, isFetching } = useGetContactsQuery('');
  const getFilteredValue = useSelector(selectFilterValue);

  const visibleContacts = () => {
    if (!data) return;

    return data.filter(item =>
      item.name.toLowerCase().includes(getFilteredValue.toLowerCase())
    );
  };

  return (
    <>
      <Title>Contacts</Title>
      {isFetching && <RotatingLines />}
      <ContactList>
        {data &&
          !error &&
          !isLoading &&
          visibleContacts().map(({ id, name, phone }) => {
            return <ContactItem key={id} id={id} name={name} phone={phone} />;
          })}
      </ContactList>
    </>
  );
};
