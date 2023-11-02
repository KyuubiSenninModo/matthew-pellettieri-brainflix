const express = require('express');
const router = express.Router();
router.use(express.json());
const videoJson = require ('../data/videos.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Routes in here

router
.get('/', (req, res)=> {
    res.status(200)
    res.json(videoJson.videoCardData);
})
.get('/:id', (req, res)=> {
    res.status(200)
    res.json(videoJson.MainVideoData.find((video)=> (
        video.id === req.params.id
    )))
})
.post('/upload', (req, res) => {
    res.status(200).send("Upload Complete!");
    const { title, description } = req.body;
    const newVideo = {id: uuidv4()};
    const newDetails = {};
    newVideo.title = title;
    newVideo.channel = "Matthew Pellettieri";
    newVideo.image = "http://localhost:8080/images/Upload-video-preview.jpg";
    newDetails = {...newVideo};
    newDetails.description = description;
    newDetails.views = "2,043,765";
    newDetails.likes = "345,678";
    newDetails.duration = "4:36";
    newDetails.timestamp = Date.now();
    newDetails.comments = [];
    videoJson.videoCardData.push(newVideo);
    videoJson.MainVideoData.push(newDetails);
    fs.writeFile('../data/videos.json', JSON.stringify(videoJson), (error)=> {
        if (error) {
            console.log("error adding video!");
            return;
        }
        else {
            console.log("New video added!");
        }
    });
})

module.exports = router;