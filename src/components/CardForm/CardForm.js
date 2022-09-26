import styles from './CardForm.module.scss'
import { useState } from 'react';
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const CardForm = props => {

    const [title, setTitle] = useState ('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_CARD', payload: {title , columnId }});
        setTitle('');
    }

    const dispatch = useDispatch();
    let columnId = props.columnId;

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <Button>Add Card</Button>
        </form>
    )
}

export default CardForm;