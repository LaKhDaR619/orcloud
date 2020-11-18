import { AppBar, Grid, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/logo.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    height: 60,
    marginTop: 0,
  },
  container: {
    width: "80%",
    flexGrow: 1,
  },
  logo: {
    width: 70,
    height: 30,
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-around",
    fontSize: 14,
  },
  nav: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          className={classes.container}
        >
          <Grid container item xs={2} justify="center">
            <img src={logo} alt="nav" className={classes.logo} />
          </Grid>
          <Grid item xs={10} className={classes.nav}>
            <ul className={classes.list}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#shop">Shop</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <IconButton
          edge="end"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
