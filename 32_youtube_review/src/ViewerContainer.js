import React from 'react'

function ViewerContainer ({ selectedVideo }) {
  if (selectedVideo === null) {
    return <div>Loading...</div>
  }
  const embedUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
  return(
    <div>
      <iframe src={embedUrl} />
      <h3>{selectedVideo.snippet.title}</h3>
      <p>{selectedVideo.snippet.description}</p>
    </div>
  )
}

export default ViewerContainer


// const embedUrl = `https://www.youtube.com/embed/${videoId}`;
//
// // in the JSX
// <iframe src={embedUrl} />;
