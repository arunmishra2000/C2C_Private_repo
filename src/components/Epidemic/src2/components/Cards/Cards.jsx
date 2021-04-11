import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <>
      <br />
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          width: "40vw",
        }}
      >
        Each step you take to decrease carbon emission is crucial to have a
        global impact aiming at the conservation of nature and its bountiful
        resources. We wish to reward soldiers like you who have walked an extra
        mile to serve/save the earth. Congratulations on your carbon credits!
        Help the needy recover from this pandemic!
      </p>
      <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">
          Global
        </Typography>
        <Grid container spacing={3} justify="center">
          <CardComponent
            className={styles.infected}
            cardTitle="Infected"
            value={confirmed.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of active cases from COVID-19."
          />
          <CardComponent
            className={styles.recovered}
            cardTitle="Recovered"
            value={recovered.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of recoveries from COVID-19."
          />
          <CardComponent
            className={styles.deaths}
            cardTitle="Deaths"
            value={deaths.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of deaths caused by COVID-19."
          />
        </Grid>
      </div>
    </>
  );
};

export default Info;
