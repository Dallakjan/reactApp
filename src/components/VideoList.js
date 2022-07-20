import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => (
    <VideoItem video={video} key={video.id} />
  ));

  return <div>{renderedList}</div>;
};

export default VideoList;
