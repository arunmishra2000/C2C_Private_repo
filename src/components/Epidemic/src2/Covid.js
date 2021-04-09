import React from "react";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import Footer from "../../CrowdSourcing/src/components/Footer";

import image from "./images/image.png";

class Covid extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <nav
          className="navbar navbar-expand-lg selectDisable"
          style={{ width: "100vw", height: "10vh" }}
        >
          <h1 className="navbar-brand"> The New Civilisation </h1>
        </nav>

        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <div>
          <a
            href="https://www.worldometers.info/coronavirus/"
            className="btn login-btn"
            style={{ margin: "100px" }}
          >
            Live Updates
          </a>
          <a
            href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/my-story/long-covid-james-ongoing-recovery-story"
            className="btn login-btn"
            style={{ margin: "100px" }}
          >
            Read/Share Recovery Experiences
          </a>
          <a
            href="https://covid19responsefund.org/en"
            className="btn login-btn"
            style={{ margin: "100px" }}
          >
            Donate
          </a>
        </div>
        <Footer style={{ width: "100vw", border: "0px" }} />
      </div>
    );
  }
}

export default Covid;
