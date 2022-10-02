import { useSelector } from "react-redux";
import { getFavoriteCard } from "../../redux/cardsRedux";
import PageTitle from "../PageTitle/PageTitle";
import style from './Favorite.module.scss'
import Card from '../Card/Card';



const Favorite = () => {

    const favoriteCard = useSelector(state => getFavoriteCard(state))
    console.log(favoriteCard);

    if (favoriteCard.length === 0) 
    return (
        <>
            <PageTitle title="Favorite"/>
            <p className={style.p}>You don't have favorite cards</p>
        </>

    );

    return (
        <>
            <PageTitle title="Favorite"/>
            <article className={style.column}>
                <ul className={style.cards}>
                    {favoriteCard.map(favoriteCard => <Card key={favoriteCard.id} title={favoriteCard.title} isFavorite={favoriteCard.isFavorite} />)}
                </ul>
            </article>
        </>
    )
}

export default Favorite;