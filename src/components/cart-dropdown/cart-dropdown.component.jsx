import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

import { CartDropdownContainer } from "./cart-dropdown.styles";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);


	return (
		<CartDropdownContainer>
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button>Go to checkout</Button>
		</CartDropdownContainer>
	)
};

export default CartDropdown;