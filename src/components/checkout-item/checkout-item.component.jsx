import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { Arrow, CheckoutItemContainer, ImageContainer, ItemName, ItemPrice, ItemQuantity, RemoveButton, Value } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemToCart(cartItem);
	const clearItemHandler = () => clearItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<ItemName>{name}</ItemName>
			<ItemQuantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<div className="arrow" onClick={addItemHandler}>&#10095;</div>
			</ItemQuantity>
			<ItemPrice>{price}</ItemPrice>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;