import style from './PageTitle.module.scss'

const PageTitle = props => {
    return (
        <h2 className={style.title}>{props.title}</h2>
    )
}

export default PageTitle;
