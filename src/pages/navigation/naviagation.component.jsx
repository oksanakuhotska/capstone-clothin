import { Outlet, Link } from "react-router-dom";
import './navigation.styles.css';

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { NavLinksContainer } from './navigation.styles.js'

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link to='/' className="logo-container">
					<CrwnLogo to='/' className="logo" />
				</Link>
				<NavLinksContainer>
					<Link to='/shop' className="nav-link">Shop</Link>
					<Link to='/contact' className="nav-link">Contact</Link>
					<Link to='/sign-in' className="nav-link">Sign in</Link>
					<Link to='/cart' className="nav-link">Cart</Link>
				</NavLinksContainer>
			</div>
			<Outlet />
		</>
	)
}

export default Navigation;