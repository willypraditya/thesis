import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import constant from "configs/constants";

import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    margin: 0,
    padding: 0,
    background: "linear-gradient(180deg, #F6F7F9 0%, #DBE0EA 100%)",
    height: "100vh",
  },
  rightContainer: {
    padding: 30,
    background: theme.palette.color.white,
    height: "100vh",
  },
  carousel: {
    marginTop: 100,
  },
  carouselContent: {
    textAlign: "center",
    borderRadius: 5,
    height: 600,
  },
  logo: {
    width: 100,
    marginBottom: 20,
  },
}));

const Layout = ({ formContent }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={9}>
        <Container maxWidth="xl" className={classes.leftContainer}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <div className={classes.carousel}>
                {/* <Carousel>
                  {carousel.map((item) => (
                    <Paper className={classes.carouselContent}>
                      <h2>{item.name}</h2>
                      <h2>{item.description}</h2>
                    </Paper>
                  ))}
                </Carousel> */}
              </div>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={3}>
        <Container className={classes.rightContainer}>
          <img
            alt="xfers-icon"
            src={`${constant.PREFIX_IMAGE}/icon/xfers.svg`}
            className={classes.logo}
          />
          {formContent}
        </Container>
      </Grid>
    </Grid>
  );
};

export default Layout;
