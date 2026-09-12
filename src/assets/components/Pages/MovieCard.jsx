import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        background:
          "linear-gradient(145deg, #180b0d, #100708)",

        color: "#ffffff",

        borderRadius: "14px",

        border: "1px solid #321316",

        overflow: "hidden",

        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",

        "&:hover": {
          transform: "translateY(-8px)",

          borderColor: "#5c1014",

          boxShadow:
            "0 15px 40px rgba(92, 16, 20, 0.3)",
        },
      }}
    >
      {/* Poster */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height="360"
          image={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Poster"
          }
          alt={movie.Title}
          onClick={handleDetails}
          sx={{
            cursor: "pointer",
            objectFit: "cover",
            transition: "transform 0.4s ease",

            "&:hover": {
              transform: "scale(1.04)",
            },
          }}
        />

        {/* Dark overlay */}

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",

            background:
              "linear-gradient(transparent, rgba(9,6,7,0.9))",

            pointerEvents: "none",
          }}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          p: 2.5,
        }}
      >
        {/* Title */}

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#f5eeee",

            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",

            mb: 1,
          }}
        >
          {movie.Title}
        </Typography>

        {/* Year + Rating */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            mb: 1.5,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#806f71",
            }}
          >
            {movie.Year}
          </Typography>

          <Chip
            icon={<StarIcon />}
            label={
              movie.imdbRating &&
              movie.imdbRating !== "N/A"
                ? movie.imdbRating
                : "N/A"
            }
            size="small"
            sx={{
              height: 25,

              color: "#d4af37",

              borderColor: "#5d4b17",

              background: "rgba(212, 175, 55, 0.05)",

              "& .MuiChip-icon": {
                color: "#d4af37",
                fontSize: "16px",
              },
            }}
            variant="outlined"
          />
        </Box>

        {/* Genre */}

        {movie.Genre &&
          movie.Genre !== "N/A" && (
            <Typography
              variant="body2"
              sx={{
                color: "#a66b70",
                fontSize: "0.8rem",
                mb: 1.5,
              }}
            >
              {movie.Genre}
            </Typography>
          )}

        {/* Plot */}

        <Typography
          variant="body2"
          sx={{
            color: "#806f71",
            lineHeight: 1.6,

            height: 70,

            overflow: "hidden",

            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {movie.Plot &&
          movie.Plot !== "N/A"
            ? movie.Plot
            : "No plot information available."}
        </Typography>

        {/* Button */}

        <Button
          variant="contained"
          fullWidth
          onClick={handleDetails}
          sx={{
            mt: 2,

            borderRadius: "8px",

            background:
              "linear-gradient(135deg, #4b0c10, #68141a)",

            color: "#f5eeee",

            fontWeight: 600,

            "&:hover": {
              background:
                "linear-gradient(135deg, #68141a, #841d24)",

              boxShadow:
                "0 6px 20px rgba(92,16,20,0.35)",
            },
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default MovieCard;