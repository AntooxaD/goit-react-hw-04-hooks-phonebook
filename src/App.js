import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { Title, Text } from './Components/Styled/Styled';

function App() {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (parsedContacts) {
            setContacts(parsedContacts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = data => {
        data.id = nanoid();

        const contact = { ...data };
        if (!checkContact(data.name)) {
            setContacts(prevState => [contact, ...prevState]);
        } else {
            alert(`${contact.name} is already in contacts`);
        }
    };
    function checkContact(index) {
        return contacts.find(
            contact => contact.name.toLowerCase() === index.toLowerCase(),
        );
    }

    const getContacts = () => {
        const normolizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normolizedFilter),
        );
    };

    const changeFilter = event => {
        return setFilter(event.currentTarget.value);
    };

    const deleteContact = id => {
        setContacts(prevState =>
            [...prevState].filter(contact => contact.id !== id),
        );
    };

    return (
        <div className="App">
            <Title>Phonebook</Title>
            <ContactForm onSubmit={addContact} />
            <Title>Contacts</Title>
            <Filter value={filter} onChange={changeFilter} />
            {getContacts.length ? (
                <ContactList contacts={getContacts} onDelete={deleteContact} />
            ) : (
                <Text>Nothing</Text>
            )}
        </div>
    );
}

export default App;
