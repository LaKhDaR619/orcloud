import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 10,
  },
  buttons: {
    marginTop: 30,
  },
  button: {
    fontSize: 16,
    borderRadius: 0,
  },
  greenbutton: {
    background: theme.palette.success.main,
    color: theme.palette.secondary.main,
    marginRight: 15,
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <section id="home" className={classes.hero}>
      <Typography variant="h4" color="secondary" className={classes.header}>
        WELCOME TO THE ARGES
      </Typography>
      <Typography variant="h5" color="secondary">
        We stand behind your success
      </Typography>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          className={`${classes.greenbutton} ${classes.button}`}
        >
          OUR PROJECT
        </Button>
        <Button variant="contained" className={classes.button}>
          LEARN MORE
        </Button>
      </div>
    </section>
  );
}

export default Hero;
