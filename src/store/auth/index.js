import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "ahmetdanis99",
    fullName: "Ahmet",
    avatar:
      "https://yt3.googleusercontent.com/_QkGS-cGeFC7wDG1Jp1jyYnp4g6WFqEYIn26VHx4DvaQeVXlHlywPC_KO1bYVPkq6LIfB0-vSg=s900-c-k-c0x00ffffff-no-rj",
  },
  accounts: [
    {
      id: 1,
      username: "ahmetdanis99",
      fullName: "Ahmet",
      avatar:
        "https://yt3.googleusercontent.com/_QkGS-cGeFC7wDG1Jp1jyYnp4g6WFqEYIn26VHx4DvaQeVXlHlywPC_KO1bYVPkq6LIfB0-vSg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      username: "mumbarsurat99",
      fullName: "Mumbar",
      avatar:
        "https://yt3.googleusercontent.com/_QkGS-cGeFC7wDG1Jp1jyYnp4g6WFqEYIn26VHx4DvaQeVXlHlywPC_KO1bYVPkq6LIfB0-vSg=s900-c-k-c0x00ffffff-no-rj",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipule etme metodlari
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
