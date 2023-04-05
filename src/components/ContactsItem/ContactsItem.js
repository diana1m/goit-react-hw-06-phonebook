import PropTypes from 'prop-types';
import { Item, BtnDelete } from './ContactItem.styled';
import { useDispatch } from "react-redux";
import { deleteContacts } from 'redux/contactsSlice';

export const ContactsItem = ({id, name, number}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContacts(id));

    return(
        <Item>
            <p>{name}: {number}</p>
            <BtnDelete onClick={handleDelete}>Delete</BtnDelete>
        </Item>
    )
}

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}