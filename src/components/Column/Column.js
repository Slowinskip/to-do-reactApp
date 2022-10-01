import style from './Column.module.scss'
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = props => {

    const cards = useSelector(state => getFilteredCards(state, props.id));
    
    return (
        <article className={style.column}>
            <h1 className={style.title}>
                <span className={style.icon + ' fa fa-' + props.icon} />
                {props.title}
            </h1>
            <ul className={style.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} cardId={card.id}/>)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    )
}

export default Column;