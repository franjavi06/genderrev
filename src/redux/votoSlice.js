import { createSlice } from "@reduxjs/toolkit";

const votoSlice = createSlice({
  name: "voto",
  initialState: {
    votos: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getVotosStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getVotosSuccess: (state, action) => {
      state.isFetching = false;
      state.votos = action.payload;
    },
    getVotosFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //DELETE
    deleteVotoStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteVotoSuccess: (state, action) => {
      state.isFetching = false;
      state.votos.splice(
        state.votos.findIndex((item) => item.id === action.payload),
        1
      );
    },
    deleteVotoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //UPDATE
    updateVotoStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateVotoSuccess: (state, action) => {
      state.isFetching = false;
      state.votos.splice(
        state.votos.findIndex((item) => item.id === action.payload),
        1
      );
    },
    updateVotoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //ADD
    addVotoStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addVotoSuccess: (state, action) => {
      state.isFetching = false;
      state.votos.push(action.payload);
    },
    addVotoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getVotosStart,
  getVotosSuccess,
  getVotosFailure,
  deleteVotoStart,
  deleteVotoSuccess,
  deleteVotoFailure,
  updateVotoStart,
  updateVotoSuccess,
  updateVotoFailure,
  addVotoStart,
  addVotoSuccess,
  addVotoFailure,
} = votoSlice.actions;
export default votoSlice.reducer;
