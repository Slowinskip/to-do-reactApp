import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCard } from '../../redux/store';
import styles from './Card.module.scss'
import { useState  } from 'react';


const Card = props => {


    const [favorite, setFavorite] = useState(props.isFavorite)
    console.log(favorite);
    const cardId = props.cardId;
    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault();
        console.log('+', cardId);
        setFavorite(!favorite)
        dispatch(toggleFavoriteCard(cardId))

        
    }

    return (
        <li className={styles.card}>{props.title}
            <button onClick={handleClick} className={clsx(styles.button, favorite && styles.isFavorite)}>
                <span className='fa fa-star-o'></span>
            </button>
        </li> 
    );
}

export default Card;