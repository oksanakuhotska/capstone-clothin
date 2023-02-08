import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { NavigationContainer, NavLinksContainer } from './navigation.styles.js'

const Navigation = () => {
	return (
		<>
			<NavigationContainer>
				<Link to='/' className="logo-container">
					<CrwnLogo to='/' className="logo" />
				</Link>
				<NavLinksContainer>
					<Link to='/shop' className="nav-link">Shop</Link>
					<Link to='/contact' className="nav-link">Contact</Link>
					<Link to='/auth' className="nav-link">Sign in</Link>
					<Link to='/cart' className="nav-link">Cart</Link>
				</NavLinksContainer>
			</NavigationContainer>
			<Outlet />
		</>
	)
}

export default Navigation;