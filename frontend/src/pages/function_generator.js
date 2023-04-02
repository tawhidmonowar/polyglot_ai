import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    Box,
    Typography,
    TextField,
    Button,
    Alert,
    Collapse,
    Card,
} from "@mui/material";

const function_generator = () => {


    return (
        <Box
            width={"80%"}
            p={"2rem"}
            m={"2rem auto"}
            borderRadius={5}
            sx={{ boxShadow: 5 }}

        >

            <form>
                <Typography variant="h3">Summarize Text</Typography>

                <TextField
                    placeholder="add your text"
                    type="text"
                    multiline={true}
                    required
                    margin="normal"
                    fullWidth
                    value={"text"}

                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ color: "white", mt: 2 }}
                >
                    Submit
                </Button>
                <Typography mt={2}>
                    not this tool ? <Link to="/">GO BACK</Link>
                </Typography>
            </form>

             (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography
                        variant="h5"
                        color="natural.main"
                        sx={{
                            textAlign: "center",
                            verticalAlign: "middel",
                            lineHeight: "450px",
                        }}
                    >
                        Summary Will Apprea Here
                    </Typography>
                </Card>
            )}
        </Box>
    );
};

export default function_generator;