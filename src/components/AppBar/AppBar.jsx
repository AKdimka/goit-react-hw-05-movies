import { NavLink } from "react-router-dom";
import css from './AppBar.module.css'

export const AppBar = () => {
	return (
		<header>
			<nav className={css.nav}>
				<NavLink
					to='/'
					className={css.navLink}
					style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
				>
					Home
				</NavLink>

				<NavLink
					to='/movies'
					className={css.navLink}
					style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
				>
					Movies
				</NavLink>
			</nav>
		</header>
	)
}