import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favorito: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favorito: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.favorito.find((p) => p.id === favorito.id)) {
        state.favorito.reduce
      } else {
        state.favorito.push(favorito)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
