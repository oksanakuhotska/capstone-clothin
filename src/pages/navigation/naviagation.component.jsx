import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux/es/exports";

// import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, LogoContainer, NavLinks, NavLink, } from './navigation.styles';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	// const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo to='/' className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>Shop</NavLink>
					<NavLink to='/contact'>Contact</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>Sign out</NavLink>
					) : (
						<NavLink to='/auth'>Sign in</NavLink>
					)}
				</NavLinks>
				<CartIcon />
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	)
}

export default Navigation;