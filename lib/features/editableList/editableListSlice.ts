import { createAppSlice } from '@/lib/createAppSlice';
import { PayloadAction } from '@reduxjs/toolkit';

export interface IEditableListSliceState {
  value: string[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: IEditableListSliceState = {
  value: [],
  status: 'idle',
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const editableListSlice = createAppSlice({
  name: 'editableListSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    add: create.reducer((state, action: PayloadAction<string>) => {
      state.value.unshift(action.payload);
    }),
    remove: create.reducer((state, action: PayloadAction<string>) => {
      state.value = state.value.filter((v) => v !== action.payload);
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectList: (counter) => counter.value,
    selectStatus: (counter) => counter.status,
  },
});

// Action creators are generated for each case reducer function.
export const { add, remove } =
  editableListSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectList, selectStatus } = editableListSlice.selectors;
