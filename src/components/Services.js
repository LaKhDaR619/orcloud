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

import mt from "../assets/Management-Training.jpg";
import bc from "../assets/bc.jpg";
import fp from "../assets/fp.jpg";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
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
    padding: 0,
    height: "100%",
  },
  cardTypo: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: "10px 15px",
    height: "100%",
  },
}));

const services = [
  {
    image: mt,
    title: "Managment Training",
    description: "We Support and help people increase mangement experience",
  },
  {
    image: bc,
    title: "Business Consulting",
    description:
      "if you are going to use a passage of Lorem ipsum, you need to be sure",
  },
  {
    image: fp,
    title: "Financial Planning",
    description: "Analysis the business plan for deployment in the market",
  },
];

function Services() {
  const classes = useStyles();

  return (
    <section id="services" className={classes.section}>
      <Typography variant="h4">Our Services</Typography>
      <Divider
        variant="fullWidth"
        orientation="horizontal"
        className={classes.divider}
      />
      <Grid container className={classes.cards} spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index.toString()}>
            <Card className={classes.card}>
              <CardContent className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Management Training"
                  height="140"
                  src={service.image}
                />
                <div className={classes.cardTypo}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="secondary" component="p">
                    {service.description}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Services;
