import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleFavoriteCard } from '../../redux/cardsRedux';
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

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard(cardId))


    }

    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={handleClick} className={clsx(styles.button, favorite && styles.isFavorite)}>
                    <span className='fa fa-star-o'></span>
                </button>
                <button className={styles.button} onClick={handleRemove}>
                    <span className='fa fa-trash'></span>
                </button>
            </div>
        </li> 
    );
}

export default Card;