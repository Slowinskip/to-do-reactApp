import styles from './ColumnForm.module.scss';
import { useState  } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    let listId = props.listId;
    console.log(listId);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    };

    

    const dispatch = useDispatch();
    
    

    


	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>Title:</label>
            <TextInput onChange={e => setTitle(e.target.value)} value={title}  />
            <label>Icon:</label>
            <TextInput onChange={e => setIcon(e.target.value)} value={icon} />
            <Button>
                Add Column
            </Button>
        </form>
	);
};

export default ColumnForm;