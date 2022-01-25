import PropTypes from 'prop-types';
import { BtnDelete, List, ListItem } from '../Styled/Styled';

function ContactList ({ contacts, onDelete })  {
   
        return (
            <List>
                {contacts.map(contact => (
                    <ListItem key={contact.id}>
                        <p>
                            {contact.name}: <span>{contact.number}</span>
                        </p>
                        <BtnDelete
                            type="button"
                            onClick={() => {
                                onDelete(contact.id);
                            }}
                        >
                            Delete
                        </BtnDelete>
                    </ListItem>
                ))}
            </List>
        );
    }

 ContactList.propTypes = {
     contacts: PropTypes.arrayOf(
         PropTypes.shape({
             id: PropTypes.string.isRequired,
             name: PropTypes.string.isRequired,
             number: PropTypes.string.isRequired,
         }),
     ).isRequired,
};
 
export default ContactList;
