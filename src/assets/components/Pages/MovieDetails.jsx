import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Chip,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=af55e318`
        );

        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError("Movie details not found.");
        }
      } catch (error) {
        console.error(
          "Error fetching movie details:",
          error
        );

        setError(
          "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  /* Loading */

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#090607",
        }}
      >
        <CircularProgress
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
          Loading movie details...
        </Typography>
      </Box>
    );
  }

  /* Error */

  if (error) {
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
          background: "#090607",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#d98a8f",
            mb: 3,
          }}
        >
          {error}
        </Typography>

        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
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
            circle at 50% 0%,
            rgba(92, 16, 20, 0.25),
            transparent 45%
          ),
          #090607
        `,
      }}
    >
      {/* Main container */}

      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",

          background:
            "linear-gradient(145deg, #180b0d, #0f0708)",

          border: "1px solid #321316",

          borderRadius: {
            xs: 2,
            md: 4,
          },

          overflow: "hidden",

          boxShadow:
            "0 25px 70px rgba(0,0,0,0.55)",
        }}
      >
        {/* Top accent */}

        <Box
          sx={{
            height: "4px",
            background:
              "linear-gradient(90deg, #3b0a0a, #76151b, #3b0a0a)",
          }}
        />

        <Box
          sx={{
            p: {
              xs: 2.5,
              sm: 4,
              md: 5,
            },
          }}
        >
          {/* Movie content */}

          <Box
            sx={{
              display: "flex",
              gap: {
                xs: 3,
                md: 5,
              },

              flexDirection: {
                xs: "column",
                md: "row",
              },

              alignItems: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            {/* Poster */}

            <Box
              sx={{
                width: {
                  xs: "75%",
                  sm: 280,
                  md: 300,
                },

                maxWidth: 300,

                flexShrink: 0,
              }}
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Poster"
                }
                alt={movie.Title}
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "12px",

                  boxShadow:
                    "0 15px 40px rgba(0,0,0,0.6)",
                }}
              />
            </Box>

            {/* Information */}

            <Box
              sx={{
                flex: 1,
                width: "100%",
              }}
            >
              {/* Title */}

              <Typography
                component="h1"
                sx={{
                  fontWeight: 800,

                  fontSize: {
                    xs: "2rem",
                    sm: "2.8rem",
                    md: "3.5rem",
                  },

                  lineHeight: 1.1,

                  color: "#f5eeee",

                  mb: 1,
                }}
              >
                {movie.Title}
              </Typography>

              {/* Year */}

              <Typography
                sx={{
                  color: "#806f71",
                  mb: 2,
                }}
              >
                {movie.Year}{" "}
                <span style={{ color: "#4b3b3d" }}>
                  •
                </span>{" "}
                {movie.Runtime}
              </Typography>

              {/* Rating */}

              <Chip
                icon={<StarIcon />}
                label={`IMDb ${movie.imdbRating}`}
                sx={{
                  color: "#d4af37",
                  borderColor: "#5d4b17",
                  background:
                    "rgba(212, 175, 55, 0.05)",

                  mb: 3,

                  "& .MuiChip-icon": {
                    color: "#d4af37",
                  },
                }}
                variant="outlined"
              />

              {/* Plot */}

              <Typography
                sx={{
                  color: "#a99395",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  mb: 4,
                }}
              >
                {movie.Plot !== "N/A"
                  ? movie.Plot
                  : "No plot information available."}
              </Typography>

              {/* Information */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },

                  gap: 2,
                }}
              >
                <InfoItem
                  label="Genre"
                  value={movie.Genre}
                />

                <InfoItem
                  label="Director"
                  value={movie.Director}
                />

                <InfoItem
                  label="Actors"
                  value={movie.Actors}
                />

                <InfoItem
                  label="Language"
                  value={movie.Language}
                />

                <InfoItem
                  label="Awards"
                  value={movie.Awards}
                />
              </Box>
            </Box>
          </Box>

          <Divider
            sx={{
              my: 5,
              borderColor: "#321316",
            }}
          />

          {/* Back button */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate("/")}
              sx={{
                color: "#c46b70",
                borderColor: "#4b2023",
                borderRadius: "8px",
                px: 4,

                "&:hover": {
                  borderColor: "#76151b",
                  background:
                    "rgba(92,16,20,0.12)",
                },
              }}
            >
              Back to Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* Reusable information component */

function InfoItem({ label, value }) {
  return (
    <Box
      sx={{
        background: "rgba(9,6,7,0.45)",
        border: "1px solid #291113",
        borderRadius: "8px",
        p: 2,
      }}
    >
      <Typography
        sx={{
          color: "#7e5e61",
          fontSize: "0.72rem",
          textTransform: "uppercase",
          letterSpacing: "1.2px",
          mb: 0.5,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          color: "#cbbabc",
          fontSize: "0.9rem",
          lineHeight: 1.5,
        }}
      >
        {value && value !== "N/A"
          ? value
          : "Not available"}
      </Typography>
    </Box>
  );
}

export default MovieDetails;