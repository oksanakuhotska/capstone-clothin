import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

import { CartDropdownContainer } from "./cart-dropdown.styles";

const CartDropdown = () => {
	return (
		<CartDropdownContainer>
			<CartItem />
			<Button>Go to checkout</Button>
		</CartDropdownContainer>
	)
};

export default CartDropdown;