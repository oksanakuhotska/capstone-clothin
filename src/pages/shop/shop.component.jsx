import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { ProcductsContext } from "../../contexts/products.context";

import { ProductsContainer } from "./shop.styles";

const Shop = () => {
	const {products} = useContext(ProcductsContext);

	return (
		<ProductsContainer>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</ProductsContainer>
	)
};

export default Shop;