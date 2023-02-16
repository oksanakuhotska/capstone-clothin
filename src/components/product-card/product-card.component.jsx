import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import { ImageContainer, ProductCardContainer } from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<ProductCardContainer>
		<ImageContainer>
			<img src={imageUrl} alt={`${name}`} />
		</ImageContainer>
		<div className="footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
		<Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
	</ProductCardContainer>
	);
};

export default ProductCard;