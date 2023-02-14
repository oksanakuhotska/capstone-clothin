import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
	return (
		<CartIconContainer>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</CartIconContainer>
	)
};

export default CartIcon;