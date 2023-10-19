import './App.scss';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import VideoDetailsPage from './components/VideoDetailsPage/videoDetailsPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios
            .get('https://project-2-api.herokuapp.com/videos?api_key=' + apiKey)
            .then((res) => {
                setVideos(res.data);
            });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<VideoDetailsPage videos={videos} />}>
                    <Route path='/:id' element={<VideoDetailsPage videos={videos} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
export const apiKey = 'edbed7ac-b4d8-4be6-9373-68e93be6ff38';