import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector"; 

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { Footer, ImageContainer, ProductCardContainer } from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
		<ImageContainer>
			<img src={imageUrl} alt={`${name}`} />
		</ImageContainer>
		<Footer>
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</Footer>
		<Button 
			buttonType={BUTTON_TYPE_CLASSES.inverted} 
			onClick={addProductToCart}
		>
			Add to card
		</Button>
	</ProductCardContainer>
	);
};

export default ProductCard;