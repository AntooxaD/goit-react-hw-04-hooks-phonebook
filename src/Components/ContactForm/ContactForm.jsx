import { Component } from 'react';
import { Form, Wrapper, SpanName, Input, Button } from '../Styled/Styled';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    reset() {
        this.setState({ name: '', number: '' });
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    render() {
        const { name, number } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Wrapper>
                    <SpanName>Name</SpanName>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                </Wrapper>
                <Button type="submit">Add Contact</Button>
            </Form>
        );
    }
}

export default ContactForm;
