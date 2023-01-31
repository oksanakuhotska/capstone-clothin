import { CategoryContainer } from './category-item.styles.js';

const CategoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<CategoryContainer>
			<div 
				className="background-image" 
					style={{
						backgroundImage: `url(${imageUrl})`
					}} />
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</CategoryContainer>
	)
}

export default CategoryItem;