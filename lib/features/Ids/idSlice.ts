import { createSlice } from "@reduxjs/toolkit";

interface Ids {
  ids: string[];
}

const initialState = { ids: [] } as Ids;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addIds(state, { payload }) {
      state.ids = payload;
    },
    removeOne(state, { payload }) {
      state.ids = state.ids.filter((id) => id !== payload);
    },
  },
});

export const { addIds, removeOne } = counterSlice.actions;
export default counterSlice.reducer;
