import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import learn from "../assets/learn.jpg";
import lamp from "../assets/lamp.jpg";
import world from "../assets/world.png";
import security from "../assets/security.png";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  divider: {
    background: "black",
    width: 50,
    height: 1,
    marginTop: 10,
    marginBottom: 30,
  },
  cards: {
    width: "80%",
    justifyContent: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    width: "60%",
  },
  image: {
    objectFit: "scale-down",
  },
}));

const services = [
  {
    image: learn,
    title: "EXPERIENCED ADVISER",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dolor.",
  },
  {
    image: lamp,
    title: "Business Consulting",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dolor.",
  },
  {
    image: world,
    title: "Financial Planning",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dolor.",
  },
  {
    image: security,
    title: "Financial Planning",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dolor.",
  },
];

function Us() {
  const classes = useStyles();
  const [selected, setSelected] = useState(1);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <section id="services" className={classes.section}>
      <Typography variant="h4">Why Choose Us</Typography>
      <Divider
        variant="fullWidth"
        orientation="horizontal"
        className={classes.divider}
      />
      <Grid container className={classes.cards} spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index.toString()}>
            <Card
              className={classes.card}
              style={{ background: selected === index ? "#129F7F" : "white" }}
              onClick={() => handleSelect(index)}
            >
              <CardContent className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Management Training"
                  height="140"
                  src={service.image}
                  className={classes.image}
                />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  color={selected === index ? "secondary" : "textPrimary"}
                >
                  {service.title}
                </Typography>
                {selected === index && (
                  <>
                    <Typography variant="body2" component="p" color="secondary">
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      className={classes.button}
                    >
                      READ MORE
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Us;
