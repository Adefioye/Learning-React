import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const songIndex = state.indexOf(action.payload);
      state.splice(songIndex, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export const { addSong, removeSong } = songsSlice.actions;

export { store };

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// // store.dispatch({
// //   type: "song/addSong",
// //   payload: "New Song!",
// // });
// store.dispatch(songsSlice.actions.addSong("New song!"))

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
