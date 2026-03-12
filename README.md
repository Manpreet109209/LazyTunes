# LazyTunes 🎵

LazyTunes is a lightweight desktop music player that automatically loads and plays songs from a local folder.
It combines a Node.js backend with a simple web-based interface and runs as a desktop application using Electron.

The goal of this project is to provide a minimal, local-first music player that requires no account, no streaming service, and no configuration. Just install the app, drop your music files into a folder, and start listening.

---

## Features

* Automatic music library detection
* Local file playback
* Simple and responsive music player interface
* Desktop application powered by Electron
* Windows installer with desktop shortcut
* Zero configuration required

LazyTunes scans a user music directory and dynamically loads available `.mp3` files, removing the need for manual configuration or metadata management.

---

## How It Works

LazyTunes follows a simple architecture:

1. The Node.js backend scans a local music directory.
2. It exposes a REST endpoint that returns available songs.
3. The frontend fetches the song list and renders the player interface.
4. Electron wraps the application into a desktop window.

Workflow:

```
Local Music Folder
        ↓
Node.js Backend (Express)
        ↓
API Endpoint (/songs)
        ↓
Frontend Music Player
        ↓
Electron Desktop Application
```

---

## Installation

Download the latest installer from the Releases section.

Run:

```
LazyTunes Setup.exe
```

The installer will:

* Install the application
* Create a desktop shortcut
* Set up the local music directory

---

## Adding Music

After installation, LazyTunes creates a music directory automatically:

```
C:\Users\<YourUser>\LazyTunes\music
```

To add songs:

1. Copy your `.mp3` files into the `music` folder
2. Launch LazyTunes
3. Your songs will appear automatically in the player

No configuration or indexing is required.

---

## Development Setup

Clone the repository:

```
git clone https://github.com/Manpreet109209/LazyTunes.git
```

Install dependencies:

```
npm install
```

Run the application in development mode:

```
npm start
```

---

## Building the Desktop App

To build the Windows installer:

```
npm run build
```

This uses Electron Builder to generate a production-ready installer.

The output will appear in the `dist` directory.

---

## Project Structure

```
LazyTunes
├── backend
│   └── server.js
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
├── assets
│   └── icon.ico
├── main.js
├── package.json
└── README.md
```

---

## Tech Stack

* Node.js
* Express
* Electron
* Electron Builder
* HTML / CSS / JavaScript

---

## Future Improvements

Possible enhancements for LazyTunes:

* Album art detection
* Playlist support
* Folder selection inside the app
* Audio visualization
* Cross-platform builds (macOS / Linux)

---

## License

This project is licensed under the ISC License.

---

## Author

Manpreet Singh
