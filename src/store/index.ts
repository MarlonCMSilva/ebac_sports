import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
// import favoritoReducer from './reducers/favorito'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
