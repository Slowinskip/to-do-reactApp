import style from './NavBar.module.scss'


const Navbar = () => {


    return (
        <nav>
            <div className={style.navWrapper}>
                <div className={style.spanDiv}>
                    <span className='fa fa-tasks'></span>
                </div>
                <div className={style.ulDiv}>
                    <ul className={style.navLinks}>
                        <li><a href="/">Home</a></li>
                        <li><a href="favorite">Favorite</a></li>
                        <li><a href="about">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;