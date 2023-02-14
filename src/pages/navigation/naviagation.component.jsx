import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.context";

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinksContainer } from './navigation.styles.js';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<NavigationContainer>
				<Link to='/' className="logo-container">
					<CrwnLogo to='/' className="logo" />
				</Link>
				<NavLinksContainer>
					<Link to='/shop' className="nav-link">Shop</Link>
					<Link to='/contact' className="nav-link">Contact</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>Sign out</span>
					) : (
						<Link to='/auth' className="nav-link">Sign in</Link>
					)}
					<Link to='/cart' className="nav-link">
						<CartIcon />
					</Link>
				</NavLinksContainer>
			</NavigationContainer>
			<Outlet />
		</>
	)
}

export default Navigation;