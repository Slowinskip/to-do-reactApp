import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getSearchString, searchCard } from '../../redux/store';




const SearchForm = () => {

    
    const [searchValue, setsearchValue] = useState();
    const searchString = useSelector(getSearchString);
    console.log(searchString);

    const handleSubmit = e => {
        e.preventDefault();  
        dispatch(searchCard(searchValue));

    }
    const dispatch = useDispatch();


    return (
        <form className={styles.searchForm} onChange={handleSubmit}>
            <TextInput placeholder='Search…' onChange={ e => setsearchValue(e.target.value)} value={searchValue}>{searchString}</TextInput>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>    
    );
  }

  export default SearchForm;