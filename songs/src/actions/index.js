// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SELECTED_SONG",
    payload: song,
  };
};
