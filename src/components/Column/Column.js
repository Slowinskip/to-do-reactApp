import style from './Column.module.scss'
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Column = props => {

    const searchString = useSelector(state => state.searchString)

    const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString));
    return (
        <article className={style.column}>
            <h1 className={style.title}>
                <span className={style.icon + ' fa fa-' + props.icon} />
                {props.title}
            </h1>
            <ul className={style.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    )
}

export default Column;