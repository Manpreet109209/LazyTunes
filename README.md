# LazyTunes 🎵

LazyTunes is a lightweight desktop music player that automatically loads and plays songs from a local folder. It combines a Node.js backend with a simple web-based interface and runs as a desktop application using Electron.

The goal of this project is to provide a minimal, local-first music player that requires no account, no streaming service, and no configuration. Just install the app, drop your music files into a folder, and start listening.

---

# Why LazyTunes Exists

Modern music players often rely on cloud services, user accounts, or heavy software ecosystems. LazyTunes was created as a **simple, offline-first alternative** designed for people who just want to play their local music collection without unnecessary complexity.

Key design ideas behind LazyTunes:

• No login or account required
• No internet connection needed
• Automatic music detection
• Lightweight desktop experience
• Simple and distraction-free UI

LazyTunes focuses on **simplicity and local ownership of music files**.

---

# Learning Goals

LazyTunes was also built as a **learning project** to explore real-world software engineering concepts while building a functional desktop application.

Through this project, the following concepts were practiced:

### Backend Development

* Building a Node.js server
* Using Express to create API endpoints
* File system scanning for dynamic data

### Frontend Development

* DOM manipulation with JavaScript
* Building an interactive audio player UI
* Managing application state in the browser

### Desktop Application Development

* Packaging web applications using Electron
* Integrating frontend and backend systems
* Building distributable installers with Electron Builder

### Software Engineering Practices

* Git version control and structured commits
* Semantic versioning
* Release management
* Project documentation

The goal was to move beyond simple tutorials and create a **real installable software product**.

---

# Features

LazyTunes currently includes:

• Automatic music library detection
• Local `.mp3` file playback
• Simple and responsive music player interface
• Dynamic song loading from backend API
• Animated album artwork while playing
• Interactive playback controls
• Desktop application powered by Electron
• Windows installer with desktop shortcut
• Zero configuration required

LazyTunes scans a user music directory and dynamically loads available `.mp3` files, removing the need for manual configuration or metadata management.

---

# How It Works

LazyTunes follows a simple architecture:

1. The Node.js backend scans a local music directory.
2. It exposes a REST endpoint that returns available songs.
3. The frontend fetches the song list and renders the player interface.
4. Electron wraps the application into a desktop window.

### Workflow

Local Music Folder
↓
Node.js Backend (Express)
↓
API Endpoint (`/songs`)
↓
Frontend Music Player
↓
Electron Desktop Application

---

# Installation

Download the latest installer from the **Releases** section.

Run:

```
LazyTunes Setup.exe
```

The installer will:

• Install the application
• Create a desktop shortcut
• Set up the local music directory

---

# Adding Music

After installation, LazyTunes creates a music directory automatically:

```
C:\Users\<YourUser>\LazyTunes\music
```

To add songs:

1. Copy your `.mp3` files into the music folder
2. Launch LazyTunes
3. Your songs will appear automatically in the player

No configuration or indexing is required.

---

# Development Setup

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

# Building the Desktop App

To build the Windows installer:

```
npm run build
```

This uses **Electron Builder** to generate a production-ready installer.

The output will appear in the `dist` directory.

---

# Project Structure

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

# Release Notes

## v1.1.0

### New

* Improved music player UI and layout
* Interactive playback controls with hover effects
* Animated album artwork during playback
* Enhanced progress bar styling and interaction

### Fixes

* Fixed cover image loading issues from backend song data
* Added default album cover fallback to prevent broken artwork

### Other Changes

* Updated application version to **1.1.0**
* Improved project stability and UI responsiveness

This release focuses on improving the **user experience of the LazyTunes player** while ensuring more reliable artwork handling.

---

# Tech Stack

LazyTunes is built using:

• Node.js
• Express
• Electron
• Electron Builder
• HTML / CSS / JavaScript

---

# Future Improvements

Possible enhancements for LazyTunes:

• Album art detection from audio metadata
• Playlist creation and management
• Folder selection inside the app
• Audio visualization effects
• Shuffle and repeat controls
• Keyboard shortcuts
• Cross-platform builds (macOS / Linux)

---

# License

This project is licensed under the **ISC License**.

---

# Author

**Manpreet Singh**

GitHub:
https://github.com/Manpreet109209
