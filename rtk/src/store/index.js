import { configureStore } from "@reduxjs/toolkit";

import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, addSong, removeSong, addMovie, removeMovie };

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// // store.dispatch({
// //   type: "song/addSong",
// //   payload: "New Song!",
// // });
// store.dispatch(songsSlice.actions.addSong("New song!"))

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
