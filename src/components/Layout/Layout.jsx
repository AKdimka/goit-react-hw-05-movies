import { NavLink, Outlet } from "react-router-dom";
import css from './Layout.module.css';


export const Layout = () => {
	return (<>
		<header>
			<nav className={css.nav}>
				<NavLink
					to='/'
					className={css.navLink}
					style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
					Home
				</NavLink>

				<NavLink
					to='/movies'
					className={css.navLink}
					style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
					Movies
				</NavLink>
			</nav>
			<hr />
		</header>

		<main>
			<Outlet />
		</main>


		<footer>
			<hr />
			2022
		</footer>
	</>)
}