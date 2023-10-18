import { useEffect, useState } from "react";
import Header from "../Header/header";
import Main from "../Main/main";
import IndividualComment from "../IndividualComment/individualComment";
import Video from "../Video/video";
import videoDetails from "../../data/video-details.json";
import videoList from "../../data/videos.json";
import VideoList from "../VideoList/videoList";
import CardDesktop from "../CardDesktop/cardDesktop";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { apiKey } from "../../App";

function VideoDetailsPage() {
  const [nextVideos, setNextVideos] = useState([]);
  const params = useParams();
  const requestedVideoid = params.id;
  const requestedVideo = videoDetails.find(
    (video) => video.id === requestedVideoid
  );

  
  //   const nextVideos = videoList.filter((video) => video.id !== activeVideo.id);

  return (
    <>
      <Header />
      <Video activeVideo={activeVideo} thumbnail={activeVideo?.image} />
      <div className="desktop--flex">
        <div className="shrink">
          <Main
            title={activeVideo?.title}
            channel={activeVideo?.channel}
            likes={activeVideo?.likes}
            views={activeVideo?.views}
            timestamp={activeVideo?.timestamp}
            description={activeVideo?.description}
          />
          {activeVideo?.comments.map((comment) => (
            <IndividualComment
              name={comment.name}
              comment={comment.comment}
              timestamp={comment.timestamp}
              key={comment.id}
            />
          ))}
          <div className="no--display-on--desktop">
            <VideoList nextVideos={nextVideos} />
          </div>
        </div>
        <div>
          <p className="next--videos">NEXT VIDEOS</p>
          {nextVideos.map((video) => (
            <CardDesktop
              title={video.title}
              id={video.id}
              key={video.id}
              channel={video.channel}
              image={video.image}
              activeVideo={activeVideo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoDetailsPage;
