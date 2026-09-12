import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import MovieCard from "./MovieCard";

function MovieResults() {
  const location = useLocation();
  const navigate = useNavigate();

  const movies = location.state?.movies || [];
  const searchTerm = location.state?.searchTerm || "";

  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (movies.length === 0) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const details = await Promise.all(
          movies.map(async (movie) => {
            const response = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=af55e318`
            );

            return await response.json();
          })
        );

        setMovieDetails(details);
      } catch (error) {
        console.error(
          "Error fetching movie details:",
          error
        );

        setError(
          "Something went wrong while loading movies."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movies]);

  if (movies.length === 0 && !loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 3,
          pt: 10,
          background: "#090607",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#f5eeee",
            mb: 1,
          }}
        >
          No movies to display
        </Typography>

        <Typography
          sx={{
            color: "#806f71",
            mb: 3,
          }}
        >
          Please search for a movie first.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            background: "#5c1014",
            "&:hover": {
              background: "#76151b",
            },
          }}
        >
          Back to Search
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 12,
        pb: 8,
        px: {
          xs: 2,
          sm: 3,
          md: 5,
        },

        background: `
          radial-gradient(
            circle at top center,
            rgba(92, 16, 20, 0.2),
            transparent 45%
          ),
          #090607
        `,
      }}
    >
      {/* Heading */}

      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          mb: 5,
        }}
      >
        <Typography
          sx={{
            color: "#806f71",
            fontSize: "0.8rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Movie Collection
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#f5eeee",
            fontSize: {
              xs: "2rem",
              sm: "2.8rem",
            },
          }}
        >
          Search Results
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#9f8d8f",
          }}
        >
          Results for{" "}
          <span
            style={{
              color: "#c46b70",
              fontWeight: 600,
            }}
          >
            "{searchTerm}"
          </span>
        </Typography>
      </Box>

      {/* Loading */}

      {loading && (
        <Box
          sx={{
            minHeight: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            size={40}
            sx={{
              color: "#76151b",
            }}
          />

          <Typography
            sx={{
              mt: 2,
              color: "#806f71",
            }}
          >
            Finding movies...
          </Typography>
        </Box>
      )}

      {/* Error */}

      {error && (
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
          }}
        >
          <Typography
            sx={{
              color: "#d98a8f",
              mb: 3,
            }}
          >
            {error}
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              background: "#5c1014",
              "&:hover": {
                background: "#76151b",
              },
            }}
          >
            Back to Search
          </Button>
        </Box>
      )}

      {/* Cards */}

      {!loading &&
        !error &&
        movieDetails.length > 0 && (
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fill, minmax(240px, 1fr))",

              gap: {
                xs: 2,
                sm: 3,
                md: 4,
              },

              maxWidth: 1200,
              mx: "auto",
            }}
          >
            {movieDetails.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
              />
            ))}
          </Box>
        )}

      {/* Back button */}

      {!loading && !error && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 7,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<FaArrowLeft />}
            onClick={() => navigate("/")}
            sx={{
              color: "#c46b70",
              borderColor: "#4b2023",
              borderRadius: "8px",
              px: 3,

              "&:hover": {
                borderColor: "#76151b",
                background: "rgba(92, 16, 20, 0.12)",
              },
            }}
          >
            Back to Search
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default MovieResults;