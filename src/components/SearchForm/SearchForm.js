import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';



const SearchForm = () => {

    
    const [searchValue, setsearchValue] = useState();
    console.log(searchValue);


    const handleSubmit = e => {
        e.preventDefault();  
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchValue });

    }
    const dispatch = useDispatch();


    return (
        <form className={styles.searchForm} onChange={handleSubmit}>
            <TextInput placeholder='Search…' onChange={ e => setsearchValue(e.target.value)} value={searchValue}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>    
    );
  }

  export default SearchForm;