import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.main,
  },
  grid: {
    width: "80%",
    minHeight: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  input: {
    background: "white",
    fontSize: 5,
    width: "100%",
  },
  button: {
    background: theme.palette.success.main,
    color: theme.palette.secondary.main,
    borderRadius: 0,
    width: 120,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography color="secondary">Request A Call Back</Typography>
          <Typography color="secondary">
            Leave your information and email adress, We will call back and
            advise you
          </Typography>
        </Grid>
        <Grid item container xs={12} sm={8} spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              className={classes.input}
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              className={classes.input}
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              className={classes.input}
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Button variant="contained" className={classes.button}>
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
