import { createAppSlice } from '@/lib/createAppSlice';
import { PayloadAction } from '@reduxjs/toolkit';

export interface IEditableListSliceState {
  value: string[];
}

const initialState: IEditableListSliceState = {
  value: [],
};

export const editableListSlice = createAppSlice({
  name: 'editableListSlice',
  initialState,
  reducers: (create) => ({
    add: create.reducer((state, action: PayloadAction<string>) => {
      state.value.unshift(action.payload);
    }),
    remove: create.reducer((state, action: PayloadAction<string>) => {
      state.value = state.value.filter((v) => v !== action.payload);
    }),
  }),
  selectors: {
    selectList: (counter) => counter.value,
  },
});

export const { add, remove } =
  editableListSlice.actions;

export const { selectList } = editableListSlice.selectors;
