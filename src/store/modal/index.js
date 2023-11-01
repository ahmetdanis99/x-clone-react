import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // state manipule etme metodlari
    _setModal: (state, action) => {
      state.modal = action.payload;
    },
    _removeModal: (state) => {
      state.modal = false;
    },
  },
});

export const { _setModal, _removeModal } = modal.actions;
export default modal.reducer;
