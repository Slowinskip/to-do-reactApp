import styles from './NavBar.module.scss'
import { Link , NavLink } from 'react-router-dom';


const Navbar = () => {


    return (
        <nav>
            <div className={styles.navWrapper}>
                <div className={styles.spanDiv}>
                    <span className='fa fa-tasks'></span>
                </div>
                <div className={styles.ulDiv}>
                    <ul className={styles.navLinks}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;