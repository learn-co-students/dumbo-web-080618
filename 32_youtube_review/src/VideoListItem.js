import React from 'react'

function VideoListItem ({ singleVideo, clickHandler }) {
  return(
    <div onClick={() => clickHandler(singleVideo)}>
      <img src={singleVideo.snippet.thumbnails.default.url} />
      <h3>{singleVideo.snippet.title}</h3>
    </div>
  )
}

export default VideoListItem
