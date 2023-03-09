import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from '../../store/cart/cart.selector';

import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../store/cart/cart.action";

import { Arrow, CheckoutItemContainer, ImageContainer, ItemName, ItemPrice, ItemQuantity, RemoveButton, Value } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
	const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

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