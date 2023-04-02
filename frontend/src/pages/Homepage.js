import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate();

    return (
        <Box p={2}>
            <Typography>
                Function Genaretor
            </Typography>
            <Card onClick={() => navigate("/function_generator")}
                sx={{
                    boxShadow: 2,
                    borderRadius: 5,
                    height: 190,
                    width: 200,
                    "&:hover": {
                        border: 2,
                        boxShadow: 0,
                        borderColor: "primary.dark",
                        cursor: "pointer",
                    },
                }}
            >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                TEXT SUMAMRY
              </Typography>
              <Typography variant="h6">
                Summarize long text into short sentences
              </Typography>
            </Stack>
            </Card>
        </Box>
    );

}

export default Homepage;