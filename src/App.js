import './App.scss';
import { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import IndividualComment from './components/IndividualComment/individualComment';
import Video from './components/Video/video';
import videoDetails from './data/video-details.json';
import videoList from './data/videos.json';
import VideoList from './components/VideoList/videoList';
import CardDesktop from './components/CardDesktop/cardDesktop';







function App() {
  const [activeVideo, setActiveVideo] = useState(videoDetails[0]);

  const [details, setDetails] = useState(videoDetails[0]);
  
  
  
  const changeCurrentVideo = (videoId) => {
    setActiveVideo(videoId)
  }
 
  const currentVideo = (videoDetails.filter(video => video.id === activeVideo))[0];



  return (
    <>
    <Header />
    <Video 
      currentVideo = {currentVideo}
      thumbnail = {activeVideo.image}
    />
    <div className="desktop--flex">
    <div className='shrink'>
      <Main 
        title = {activeVideo.title}
        channel = {activeVideo.channel}
        likes = {activeVideo.likes}
        views = {activeVideo.views}
        timestamp = {activeVideo.timestamp}
        description = {activeVideo.description}
      />
      {activeVideo.comments.map(comment => (
        <IndividualComment 
        name = {comment.name}
        comment = {comment.comment}
        timestamp = {comment.timestamp}
        key = {comment.id}
      />
      ))}
      <div className="no--display-on--desktop">
        <VideoList 
          activeVideo = {activeVideo}
          changeCurrentVideo = {changeCurrentVideo}
        />
     </div>
    </div>
    <div>
      <p className="next--videos">NEXT VIDEOS</p>
    {videoList.map(video => (
                <CardDesktop 
                    title = {video.title}
                    id = {video.id}
                    key = {video.id}
                    channel = {video.channel}
                    image = {video.image}
                    activeVideo = {activeVideo}
                    changeCurrentVideo = {changeCurrentVideo}
                />
        ))}
    </div>
    </div>
    </>
  );
}

export default App;
