import PropTypes from 'prop-types';

export const Filter = ( {onChange, value}) => {
    return(
        <>
            <label name="filter">Find contact by name</label>
            <input onChange={onChange} value={value} type="text" name="filter"/>
        </>    
    )
}

Filter.propTypes ={
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}