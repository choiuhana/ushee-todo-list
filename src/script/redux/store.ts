import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
    key: "root", //TODO redux persist config key change
    // transforms: [
    //   encryptTransform({
    //     secretKey: '5Kj<ye|RNgg]K`(Z(g1u@HS)R^Dd$tjnl1FlBZRx4G,@F8`2ZG#HT4EH]pf(Ht',
    //     onError: function (error) {
    //       // Handle the error.
    //     },
    //   }),
    // ],
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers));

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {account: accountReducer, ...}
export type AppDispatch = typeof store.dispatch;
