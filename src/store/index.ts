import { EnhancedStore, combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
import AuthReducer from './slices/AuthSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: AuthReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: [thunk],
});

export type AppStore = EnhancedStore<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;

// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);

export const persistor = persistStore(store)