import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          alt="niagra falls"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse Into the Falls
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 Hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}></Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
