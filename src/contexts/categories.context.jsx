import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const  CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	// useEffect(() => {
	// 	addCollectionsAndDocuments('categories', SHOP_DATA);
	// }, [])  // - categories - додати тільки раз, потім видалити (для того щоб доати інфу в бд, якщо залишити, то колекції створюватимуться повторно)

useEffect(() => {
	const getCategoriesMap = async() => {
		const categoryMap = await getCategoriesAndDocuments();
		setCategoriesMap(categoryMap);
	};

	getCategoriesMap();
}, []);

	const value = { categoriesMap };

	return (
		<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
	);
};