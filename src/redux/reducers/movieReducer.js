import { createSlice } from "@reduxjs/toolkit";

// The initial state when the application load in first time
const initialState = {
  movies: [],
  movie: null,
  token: localStorage.getItem("token"),
};

// Define the reducers
const movieSlicer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getAllMoviesReducer: (state, action) => {
      state.movies = action.payload;
    },
    getDetailMovieReducer: (state, action) => {
      state.movie = action.payload;
    },
  },
});

// Export the reducer function, the functions will be called in actions
export const { getAllMoviesReducer, getDetailMovieReducer } = movieSlicer.actions;

// Export the reducer to combine it with another reducers
export default movieSlicer.reducer;
