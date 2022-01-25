import { Component } from 'react/cjs/react.production.min';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { Title } from './Components/Styled/Styled';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };
   
    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);
    
        if (parsedContacts) {
          this.setState({ contacts: parsedContacts });
        }
      }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
          localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
      }
    addContact = data => {
        data.id = nanoid();

        const contact = { ...data };
        if (!this.checkContact(data.name)) {
            this.setState(prevState => ({
                contacts: [...prevState.contacts, contact],
            }));
        } else {
            alert(`${contact.name} is already in contacts`);
        }
    };
    checkContact(index) {
        const { contacts } = this.state;
        return contacts.find(
            contact => contact.name.toLowerCase() === index.toLowerCase(),
        );
    }

    getContacts = () => {
        const { contacts, filter } = this.state;
        const normolizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normolizedFilter),
        );
    };
    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };
    deleteContact = id => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts].filter(
                contact => contact.id !== id,
            ),
        }));
    };
    render() {
        const getContacts = this.getContacts();
        const { filter } = this.state;
        return (
            <div className="App">
                <Title>Phonebook</Title>
                <ContactForm onSubmit={this.addContact} />
                <Title>Contacts</Title>
                <Filter value={filter} onChange={this.changeFilter} />
                {getContacts.length ? (
                    <ContactList
                        contacts={getContacts}
                        onDelete={this.deleteContact}
                    />
                ) : (
                    <p>Nothing</p>
                )}
            </div>
        );
    }
}

export default App;
