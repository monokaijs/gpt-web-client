import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {appSlice, AppState} from "@app/redux/slices/app.slice";

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2,
};
const appPersistConfig = {
  key: 'app',
  storage,
  blacklist: ['appLoading'],
  stateReconciler: autoMergeLevel2,
};
const authPersistConfig = {
  key: 'app',
  storage,
  blacklist: ['some-thing'],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<any>(rootPersistConfig, combineReducers({
  app: persistReducer<any>(appPersistConfig, appSlice.reducer),
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
});

interface RootState {
  app: AppState,
};
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
