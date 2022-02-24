import React from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { selectSong } from "../actions";

function SongList(params) {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  const renderedSongs = songs.map((song) => (
    <div className="item" key={song.title}>
      <div className="right floated content">
        <button
          onClick={() => dispatch(selectSong(song))}
          className="ui button primary"
        >
          Select
        </button>
      </div>
      <div className="content">{song.title}</div>
    </div>
  ));

  return <div className="ui divided list">{renderedSongs}</div>;
}

export default SongList;

// class SongList extends React.Component {
//   renderList() {
//     return this.props.songs.map((song) => (
//       <div className="item" key={song.title}>
//         <div className="right floated content">
//           <button
//             onClick={() => this.props.dispatch(selectSong(song))}
//             className="ui button primary"
//           >
//             Select
//           </button>
//         </div>
//         <div className="content">{song.title}</div>
//       </div>
//     ));
//   }
//   render() {
//     return <div className="ui divided list">{this.renderList()}</div>;
//   }
// }

// const mapStateToProps = (state) => {
//   return { songs: state.songs };
// };

// // Passing mapStateToProps and action creators to the connect Component
// export default connect(mapStateToProps)(SongList);
