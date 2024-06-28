import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import storeSlice from "./slices/storeSlice";
import themeSlice from "./slices/themeSlice";
import modifierCategorySlice from "./slices/modifierCategorySlice";
import itemListReducer from './slices/itemListSlice'

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
    store : storeSlice,
    theme : themeSlice,
    modifierCategory : modifierCategorySlice,
    itemList: itemListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
