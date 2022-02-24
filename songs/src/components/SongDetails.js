import React from "react";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";

function SongDetails() {
  const selectedSong = useSelector((state) => state.selectedSong);

  if (!selectedSong) {
    return <h1>Please Select a Song</h1>;
  }

  return (
    <>
      <h1>Details For:</h1>
      <div>Title: {selectedSong.title}</div>
      <br />
      <div>Title: {selectedSong.duration}</div>
    </>
  );
}

export default SongDetails;

// class SongDetails extends React.Component {
//   render() {
//     const { selectedSong } = this.props;

//     if (!selectedSong) {
//       return <h1>Please Select a Song</h1>;
//     }
//     return (
//       <>
//         <h1>Details For:</h1>
//         <div>Title: {selectedSong.title}</div>
//         <br />
//         <div>Title: {selectedSong.duration}</div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { selectedSong: state.selectedSong };
// };

// export default connect(mapStateToProps)(SongDetails);
