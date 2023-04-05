import { ContactsItem } from "components/ContactsItem/ContactsItem";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

export const ContactsList = ({contactsList, onClickDelete}) => {
    const contacts = useSelector(getContacts);
    return(
        <ul>
            {contacts.map(contact => <ContactsItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} onClickDelete={onClickDelete}/>)}
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