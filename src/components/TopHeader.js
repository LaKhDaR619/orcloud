import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: {
      minHeight: 30,
      margin: 0,
      padding: "20 0",
      background: "#002238",
    },
    contact: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1,
    },
    social: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "space-around",
    },
    icon: {
      fontSize: 20,
      margin: "0 5px",
    },
    typo: {
      fontSize: 12,
      fontWeight: "normal",
      marginRight: 20,
    },
  };
});

function TopHeader() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.contact}>
          <HomeIcon className={classes.icon} />
          <Typography className={classes.typo}>
            2286 Progress Way, New York
          </Typography>
          <PhoneIcon className={classes.icon} />
          <Typography className={classes.typo}>+(1) 56 375 4874</Typography>
          <AccessTimeIcon className={classes.icon} />
          <Typography className={classes.typo}>
            Mon-Sat 09:00 am - 17:00 pm / Sunday CLOSE
          </Typography>
        </div>

        <div className={classes.social}>
          <FacebookIcon className={classes.icon} />
          <TwitterIcon className={classes.icon} />
          <RedditIcon className={classes.icon} />
          <LinkedInIcon className={classes.icon} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopHeader;
