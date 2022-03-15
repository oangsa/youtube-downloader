const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();


app.use(cors());

app.listen(3000, () => {
    console.log('Server started on port 3000');
})


app.get('/download', (req, res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="audio.mp3"');


    ytdl(URL, {
        format: 'mp3',
        quality: 'highestaudio',
    }).pipe(res);
})