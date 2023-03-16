import { takeLatest, call, all, put } from 'redux-saga/effects' 

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import CATEGORIES_ACTION_TYPES from './category.types';

export function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
		yield put(fetchCategoriesSuccess(categoriesArray));
	}	catch (error) {
		yield put(fetchCategoriesFailed(error));
	}
}

// first generator triggers when we call fetchCategoriesStart
export function* onFetchCategories() {
	yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
};

export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
};