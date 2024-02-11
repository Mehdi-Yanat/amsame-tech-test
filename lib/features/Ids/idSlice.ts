import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface Ids {
  ids: string[];
}

const initialState = { ids: [] } as Ids;

const idsSlice = createSlice({
  name: "ids",
  initialState,
  reducers: {
    initialStateIds(state, { payload }) {
      state.ids = payload;
    },
    addIds(state, { payload }) {
      const uniqueIds = payload.filter((id: string) => !state.ids.includes(id));
      const uniqueId = payload.filter((id: string) => state.ids.includes(id));

      if (!uniqueIds.length) {
        toast.warn("Nothing to add");
      } else {
        state.ids.push(...uniqueIds);
        if (typeof window !== "undefined") {
          localStorage.setItem("ids", JSON.stringify(state.ids));
          toast.success("id added successfully");
        }
      }

      if (uniqueId.length) {
        uniqueId.map((id: string) => toast.warn("Id Exist " + id));
      }
    },
    removeOne(state, { payload }) {
      state.ids = state.ids.filter((id) => id !== payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("ids", JSON.stringify(state.ids));
        toast.success("id removed " + payload);
      }
    },
  },
});

export const { addIds, removeOne, initialStateIds } = idsSlice.actions;
export default idsSlice.reducer;
