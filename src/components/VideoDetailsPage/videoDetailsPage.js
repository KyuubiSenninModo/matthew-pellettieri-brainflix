import { useEffect, useState } from "react";
import Header from "../Header/header";
import Main from "../Main/main";
import IndividualComment from "../IndividualComment/individualComment";
import Video from "../Video/video";
import VideoList from "../VideoList/videoList";
import CardDesktop from "../CardDesktop/cardDesktop";
import axios from "axios";
import { apiKey } from "../../App";
import { useParams } from "react-router-dom";

function VideoDetailsPage(props) {
  const { videos } = props;

  const params = useParams();
  const requestedVideoId = params.id;
  const requestedVideo = videos.find((video) => video.id === requestedVideoId);

  const activeVideo = requestedVideo || videos[0] || {};

  const nextVideos = videos.filter((video) => video.id !== activeVideo.id);

  const [activeVideoDetails, setActiveVideoDetails] = useState({});

  useEffect(() => {
    if (activeVideo.id)
      axios
        .get(
          "https://project-2-api.herokuapp.com/videos/" +
            activeVideo.id +
            "?api_key=" +
            apiKey
        )
        .then((res) => {
          setActiveVideoDetails(res.data);
        });
  }, [activeVideo]);
  return (
    <>
      <Header />
      <Video
        currentVideo={activeVideoDetails}
        thumbnail={activeVideoDetails.image}
      />
      <div className="desktop--flex">
        <div className="shrink">
          <Main
            title={activeVideoDetails.title}
            channel={activeVideoDetails.channel}
            likes={activeVideoDetails.likes}
            views={activeVideoDetails.views}
            timestamp={activeVideoDetails.timestamp}
            description={activeVideoDetails.description}
          />
          {activeVideoDetails.comments?.map((comment) => (
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
              activeVideoDetails={activeVideoDetails}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoDetailsPage;
