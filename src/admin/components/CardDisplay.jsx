import * as React from "react";
import { CssBaseline, Grid, Paper, Typography } from "@mui/material";
import { CardData } from "../data/CardData";
import { Box } from "@mui/system";

const CardDisplay = () => {
    return (
        <>
            <CssBaseline />
            <Grid container spacing={2}>
                {CardData.map((item, index) => (
                    <Grid key={index} item xs={12} md={3}>
                        <Paper
                            sx={{
                                p: "20px",
                                display: "flex",
                                justifyContent: "space-between",
                                bgcolor: `${item.bgcolor}`,
                                color: "#fff"
                                // width: "50%"
                                // margin: "0 auto"
                            }}
                        >
                            <Box
                                display={"flex"}
                                flexDirection="column"
                                justifyContent={"space-between"}
                            >
                                <Typography
                                    // variant="h4"
                                    sx={{ fontSize: "32px" }}
                                >
                                    {item.data}
                                </Typography>
                                <Typography
                                    // variant="h4"
                                    sx={{ fontSize: "18px" }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                            <div
                                className="icon-item"
                                style={{ fontSize: "50px", color: "#fff" }}
                            >
                                {item.icon}
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
export default CardDisplay;
