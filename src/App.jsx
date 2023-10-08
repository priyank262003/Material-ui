import React from "react";
import { Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button } from "@mui/material";
import {CenterFocusStrong, PhotoCamera} from '@mui/icons-material'

import { makeStyles} from '@mui/styled-engine'
//import useStyles from './style';
const App =()=>{
    return(
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">Photo Album</Typography>

                </Toolbar>
            </AppBar>

            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hi everyone... This is my first project on material-UI. I made a project of photo album.I will also provide a video link so you can refer this project.
                        </Typography>

                    </Container>
                </div>

                <div>
                    <Grid container spacing={2} justify = "center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                See my photos
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button variant="outlined" color="secondary">
                                More Options
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                <Container className="classes.cardGrid" maxWidth="md">
                    <Grid Container spacing={4}>
                        <Grid item>
                            <Card className="classes.card">
                                <CardMedia
                                className="classes.CardMedia"
                                image="https://source.unsplash.com/random"
                                title="Image title"
                                />
                                <CardContent className="classes.CardContent">
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>

                                    <Typography>
                                        This is media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                
            </main>
        </>
    )

}

export default App;
