import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@models/RickAndMortyApiResponse.ts';
import { RootState } from '@services/redux/store';

export interface ISelectStoreState {
  items: Character[];
}

const initialState: ISelectStoreState = {
  items: [],
};

export const selectStore = createSlice({
  name: 'selectStore',
  initialState,
  reducers: {
    addItem: (state: ISelectStoreState, action: PayloadAction<Character>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state: ISelectStoreState, action: PayloadAction<Character>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clear: (state: ISelectStoreState) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clear } = selectStore.actions;

export const itemsCount = (state: RootState): number => state.selectStore.items.length;

export const itemExists =
  (id: number) =>
  (state: RootState): boolean =>
    state.selectStore.items.some((item) => item.id === id);

export const selectItems = (state: RootState): Character[] => state.selectStore.items;

export default selectStore.reducer;
