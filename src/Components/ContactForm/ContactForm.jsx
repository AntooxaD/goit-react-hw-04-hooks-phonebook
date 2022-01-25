import { useState } from 'react';
import { Form, Wrapper, SpanName, Input, Button } from '../Styled/Styled';
import PropTypes from 'prop-types';

function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        reset();
    };

    function reset() {
        setName('');
        setNumber('');
    }

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Wrapper>
                <SpanName>Name</SpanName>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </Wrapper>
            <Wrapper>
                Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </Wrapper>
            <Button type="submit">Add Contact</Button>
        </Form>
    );
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
