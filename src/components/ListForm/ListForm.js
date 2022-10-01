import styles from './ListForm.module.scss'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';




const ListForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch(); 

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        console.log(title, description);
        setTitle('');
        setDescription('');

    }

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>Title:</label>
            <TextInput value={title} onChange={ e => setTitle(e.target.value) }/>
            <label>Description:</label>
            <TextInput value={description} onChange={ e => setDescription(e.target.value) }/>
            <Button>
                Add List
            </Button>
        </form>
	);
}

export default ListForm;

