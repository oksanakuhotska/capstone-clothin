import { ProductCardContainer } from "./product-card.styles";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;

	return (
		<ProductCardContainer>
		<img src={imageUrl} alt={`${name}`} />
		<div className="footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
		<Button buttonType='inverted'>Add to card</Button>
	</ProductCardContainer>
	);
};

export default ProductCard;