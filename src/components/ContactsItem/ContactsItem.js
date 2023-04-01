import PropTypes from 'prop-types';
import { Item, BtnDelete } from './ContactItem.styled';

export const ContactsItem = ({name, number, onClickDelete}) => {
    const deleteContact = () => {
        onClickDelete(name);
    }

    return(
        <Item>
            <p>{name}: {number}</p>
            <BtnDelete onClick={deleteContact}>Delete</BtnDelete>
        </Item>
    )
}

ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired,
}