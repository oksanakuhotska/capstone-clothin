import { useDispatch } from "react-redux";

import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../store/cart/cart.reducer";

import { Arrow, CheckoutItemContainer, ImageContainer, ItemName, ItemPrice, ItemQuantity, RemoveButton, Value } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const dispatch = useDispatch();

	const addItemHandler = () => dispatch(addItemToCart(cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

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