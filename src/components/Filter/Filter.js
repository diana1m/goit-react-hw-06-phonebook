import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const handleFilter = evt =>{
        dispatch(filterValue(evt.target.value))
    }
    
    return(
        <>
            <label name="filter">Find contact by name</label>
            <input onChange={handleFilter} value={filter} type="text" name="filter"/>
        </>    
    )
}
