/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	language: true,
};

const languageSlice = createSlice({
	name: "language",
	initialState,

	reducers: {
		setShowGreeceLanguageState: (state, action) => {
			state.language = false;
		},

		setShowEnglishLanguageState: (state, action) => {
			state.language = true;
		},
	},
});

export const { setShowGreeceLanguageState, setShowEnglishLanguageState } =
	languageSlice.actions;

export const selectLanguage = (state) => state.language.language;

export default languageSlice.reducer;
