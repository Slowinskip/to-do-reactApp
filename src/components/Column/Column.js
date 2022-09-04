import style from './Column.module.scss'
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';

const Column = props => {
    return (
        <article className={style.column}>
            <h1 className={style.title}>
                <span className={style.icon + ' fa fa-' + props.icon} />
                {props.title}
            </h1>
            <ul className={style.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} action={props.addCard} />
        </article>
    )
}

export default Column;