/** @format */

import { configureStore } from "@reduxjs/toolkit";
import changeLanguageReducer from "../features/language/languageSlice";

export const store = configureStore({
	reducer: {
		language: changeLanguageReducer,
	},
});
