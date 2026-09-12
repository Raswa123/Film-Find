# 🎬 FilmFind

FilmFind is a React-based movie search application that allows users to search for movies and explore detailed information such as ratings, genres, cast, directors, runtime, language, awards, and plot.

The application uses the **OMDb API** to fetch movie information.

## ✨ Features

* 🔎 Search for movies by title
* 🎬 Display movie posters and titles
* ⭐ View IMDb ratings
* 📅 View release year
* 📝 View movie plot
* 🎭 View genre, actors, and director
* ⏱️ View runtime and language
* 🏆 View awards
* 📄 Dedicated movie details page
* 🔙 Easy navigation between pages
* ⏳ Loading indicators
* ⚠️ Error handling for invalid searches
* 📱 Responsive design

## 🛠️ Technologies Used

* React.js
* React Router
* Material UI (MUI)
* React Icons
* OMDb API
* JavaScript
* HTML
* CSS
* Vite

## 📂 Project Structure

```text
Film_find
│
├── src
│   ├── assets
│   │   └── components
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       └── Pages
│   │           ├── Home.jsx
│   │           ├── MovieCard.jsx
│   │           └── MovieDetails.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public
├── package.json
├── package-lock.json
└── README.md
```

## 🔄 How It Works

```text
Home Page
    ↓
Search for a movie
    ↓
OMDb Search API
    ↓
Search Results
    ↓
Select a movie
    ↓
Movie Details Page
    ↓
OMDb Details API
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd Film_find
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.

## 🔑 API

FilmFind uses the **OMDb API** to retrieve movie information.

Search movies:

```text
https://www.omdbapi.com/?s=movieTitle
```

Get movie details:

```text
https://www.omdbapi.com/?i=imdbID
```

## 🎯 Purpose

This project was created as a practice project to improve my understanding of:

* React components
* React Hooks
* React Router
* API integration
* Fetch and asynchronous JavaScript
* State management
* Reusable components
* Material UI
* Responsive UI design

## 👩‍💻 Author

**Fathima Raswa C. T.**

Computer Science Engineering Graduate

---

 If you find this project useful, feel free to explore the repository.
