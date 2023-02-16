import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {

	return (
		<CategoryPreviewContainer>
			<h2>
				<span className="title">{title.toUpperCase()}</span>
			</h2>
			<div className="preview">
				{
					products
					.filter((_, idx) => idx < 4)
					.map((product) => 
					<ProductCard key={product.id} product={product} />)
				}
			</div>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;