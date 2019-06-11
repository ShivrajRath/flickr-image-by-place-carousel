/**
 * This is just a dummy component
 * to wake up a server dyno, which sleeps after 30 mins of inactivity
 */
import React, { Component } from "react";
import environment from "../environments/environment";

export class WakeUpDyno extends Component {
  componentDidMount() {
    fetch(`${environment.apihost}/wakeup`);
  }

  render() {
    return <React.Fragment />;
  }
}

export default WakeUpDyno;
