import "./App.scss";
import { BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom";
import VideoDetailsPage from "./components/VideoDetailsPage/videoDetailsPage";
import { useEffect, useState } from "react";
import axios from "axios";



function App() {

  const params = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  // const activeVideo = requestedVideo || videoDetails[0];
  const requestedVideoid = params.id;
  const requestedVideo = videoDetails.find(
    (video) => video.id === requestedVideoid
  );
  setVideoDetails = 
  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${requestedVideoid}/?api_key=` + apiKey)
      .then((res) => {
        
      })
  })
  // useEffect(() => {
  //   axios
  //     .get("https://project-2-api.herokuapp.com/videos?api_key=" + apiKey)
  //     .then((res) => { 
  //       setVideoDetails(res.data);
  //       setNextVideos(res.data.filter((video) => video.id !== activeVideo.id))
  //     });
  // }, []);


  
  return (

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<VideoDetailsPage />}> 
    <Route path="/:id" element={<VideoDetailsPage activeVideo={}/>} />
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
export const apiKey = "edbed7ac-b4d8-4be6-9373-68e93be6ff38";