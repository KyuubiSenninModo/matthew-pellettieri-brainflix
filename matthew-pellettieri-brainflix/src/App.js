import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetailsPage from "./components/VideoDetailsPage/videoDetailsPage";
import { useEffect, useState } from "react";
import axios from "axios";
import Upload from "./pages/Upload/upload";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const sideBarUrl = "http://localhost:8080/videos";
    axios.get(sideBarUrl).then((res) => {
      setVideos(res.data);
    });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<VideoDetailsPage videos={videos} />}>
          <Route path="/:id" element={<VideoDetailsPage videos={videos} />} />
        </Route>
        <Route path="/upload" element={<Upload />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
