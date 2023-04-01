import { ContactsItem } from "components/ContactsItem/ContactsItem";
import PropTypes from 'prop-types';

export const ContactsList = ({contactsList, onClickDelete}) => {
    return(
        <ul>
            {contactsList.map(contact => <ContactsItem key={contact.id} name={contact.name} number={contact.number} onClickDelete={onClickDelete}/>)}
        </ul>
    )
}

ContactsList.propTypes = {
    contactsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onClickDelete: PropTypes.func.isRequired,    
}