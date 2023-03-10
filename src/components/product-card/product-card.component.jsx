import { useContext } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import { Footer, ImageContainer, ProductCardContainer } from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

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