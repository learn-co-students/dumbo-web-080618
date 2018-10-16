import React from 'react'
import VideoListItem from './VideoListItem'

function VideoList ({ videos, clickHandler }) {
  const videoComponents = videos.map(video => <VideoListItem clickHandler={clickHandler} key={video.id.videoId} singleVideo={video} />)
  return(
    <div>
      {videoComponents}
    </div>
  )
}

export default VideoList
