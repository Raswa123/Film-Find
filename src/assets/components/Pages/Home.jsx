import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (movie.trim() === "") {
      setError("Please enter a movie name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${movie.trim()}&apikey=af55e318`
      );

      const data = await response.json();

      if (data.Response === "True") {
        navigate("/movies", {
          state: {
            movies: data.Search,
            searchTerm: movie,
          },
        });
      } else {
        setError("Movie not found. Try searching for another movie!");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        pt: 10,

        background: `
          radial-gradient(
            circle at 50% 35%,
            rgba(92, 16, 20, 0.38) 0%,
            rgba(42, 7, 9, 0.2) 30%,
            transparent 65%
          ),
          linear-gradient(
            135deg,
            #090607 0%,
            #120708 50%,
            #090607 100%
          )
        `,
      }}
    >
      {/* Decorative top line */}

      <Box
        sx={{
          width: "60px",
          height: "3px",
          background: "#76151b",
          borderRadius: 5,
          mb: 4,
          boxShadow: "0 0 20px rgba(118, 21, 27, 0.5)",
        }}
      />

      {/* Icon */}

      <Box
        sx={{
          width: 85,
          height: 85,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,

          background:
            "linear-gradient(145deg, #3b0a0a, #170708)",

          border: "1px solid #5c1014",

          boxShadow:
            "0 0 40px rgba(92, 16, 20, 0.3)",
        }}
      >
        <BiSolidCameraMovie
          size={42}
          color="#c46b70"
        />
      </Box>

      {/* Main heading */}

      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: "3rem",
            sm: "4.5rem",
            md: "5.5rem",
          },
          fontWeight: 800,
          letterSpacing: "-2px",
          lineHeight: 1,
          mb: 2,
          color: "#f7eeee",

          textShadow:
            "0 10px 40px rgba(0,0,0,0.7)",
        }}
      >
        Film
        <span style={{ color: "#8f252c" }}>
          Find
        </span>
      </Typography>

      {/* Subtitle */}

      <Typography
        sx={{
          fontSize: {
            xs: "1.1rem",
            sm: "1.3rem",
          },
          color: "#cbbabc",
          mb: 1,
          fontWeight: 500,
        }}
      >
        Discover your next favorite movie.
      </Typography>

      <Typography
        sx={{
          maxWidth: 600,
          color: "#806f71",
          lineHeight: 1.7,
          mb: 5,
          fontSize: "0.95rem",
        }}
      >
        Search thousands of movies and explore ratings,
        genres, cast, directors, awards, and unforgettable
        stories.
      </Typography>

      {/* Search */}

      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          width: "100%",
          maxWidth: 650,

          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <TextField
          fullWidth
          label="Search for a movie"
          placeholder="Try Avengers, Interstellar..."
          value={movie}
          onChange={(e) => {
            setMovie(e.target.value);
            setError("");
          }}
          onKeyDown={handleKeyDown}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(22, 12, 13, 0.9)",
              color: "#ffffff",
              borderRadius: "10px",

              "& fieldset": {
                borderColor: "#3a1a1d",
              },

              "&:hover fieldset": {
                borderColor: "#5c1014",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#76151b",
                borderWidth: "1px",
              },
            },

            "& .MuiInputLabel-root": {
              color: "#927d80",
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#c46b70",
            },
          }}
        />

        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={loading}
          startIcon={
            !loading && <FaSearch size={14} />
          }
          sx={{
            minWidth: {
              xs: "100%",
              sm: "130px",
            },

            borderRadius: "10px",

            background:
              "linear-gradient(135deg, #5c1014, #76151b)",

            color: "#ffffff",

            fontWeight: 700,

            "&:hover": {
              background:
                "linear-gradient(135deg, #76151b, #8f252c)",

              boxShadow:
                "0 8px 25px rgba(92, 16, 20, 0.35)",
            },

            "&.Mui-disabled": {
              background: "#321316",
              color: "#806f71",
            },
          }}
        >
          {loading ? (
            <CircularProgress
              size={22}
              sx={{ color: "#ffffff" }}
            />
          ) : (
            "Search"
          )}
        </Button>
      </Box>

      {/* Error */}

      {error && (
        <Typography
          sx={{
            mt: 3,
            color: "#d98a8f",
            fontSize: "0.9rem",
          }}
        >
          {error}
        </Typography>
      )}

      {/* Bottom text */}

      <Typography
        sx={{
          position: {
            xs: "static",
            md: "absolute",
          },
          bottom: 25,
          mt: {
            xs: 6,
            md: 0,
          },
          color: "#4f4143",
          fontSize: "0.75rem",
          letterSpacing: "1px",
        }}
      >
        YOUR NEXT STORY STARTS HERE
      </Typography>
    </Box>
  );
}

export default Home;