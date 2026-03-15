const express = require("express");
const fs = require("fs");
const path = require("path");
const os = require("os");

const app = express();
const PORT = 3000;

const frontendPath = path.join(__dirname, "../frontend");

const homeDir = os.homedir();
const appFolder = path.join(homeDir, "LazyTunes");
const musicPath = path.join(appFolder, "music");

if (!fs.existsSync(musicPath)) {
    fs.mkdirSync(musicPath, { recursive: true });
}

/* serve frontend */

app.use(express.static(frontendPath));

/* serve music files */

app.use("/music", express.static(musicPath));

/* API endpoint */

app.get("/songs", (req, res) => {
    fs.readdir(musicPath, (err, files) => {

    if (err) {
    return res.status(500).json({ error: "music folder error" });
}

const songs = files
.filter(file => file.toLowerCase().endsWith(".mp3"))
.map(file => {

const title = file
.replace(".mp3","")
.replace(/-/g," ")
.replace(/_/g," ");

return {
    title: title,
    artist: "Unknown Artist",
    cover: "/img/default-cover.png",
    path: `/music/${file}`
};

});

res.json(songs);

});

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
