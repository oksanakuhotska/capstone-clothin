import { useSelector } from 'react-redux';

import { selectCategoriesIsLoadding, selectCategoriesMap } from "../../store/category/category.selector";

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

// import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoadding);

	return (
		<>
			{ isLoading ? (
				<Spinner />
			) : (
				(Object.keys(categoriesMap).map(title => {
					const products = categoriesMap[title];

					return (
						<CategoryPreview key={title} title={title} products={products} />
					);
				}))
			)}
		</>
	)
};

export default CategoriesPreview;