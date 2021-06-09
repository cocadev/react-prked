import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setSpaceData } from "../../redux/actions/dataActions";

import SpotTripInfo from "./SpotTripInfo";

class ConfirmationPrompt extends React.Component {
  constructor(props) {
    super(props);

    console.log(`props into confirmation prompt`);
    console.log(props);
    this.state = {
      userId: props.userId,
      spotId: props.spotId,
      timeDelta: props.timeDelta,
      price: props.price,
      spot: props.spot,
      startDate: props.startDate,
      endDate: props.endDate,
    };
  }

  displayHumanReadableDate(date) {
    let hours = date.getHours();
    let pm = "AM";
    if (hours >= 12) {
      pm = "PM";
      hours = hours - 12;
    }
    return `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}  ${hours}:${date.getMinutes()} ${pm}`;
  }

  handleConfirm = (event) => {
    this.props.setSpaceData(this.props, this.props.history);
  };

  render() {
    return (
      <div
        id="confirmationPrompt"
        style={{
          position: "fixed",
          zIndex: 10000,
          left: "20vw",
          top: "25vh",
          width: "50%",
          height: "auto",
          backgroundColor: "#e7f4f2",
          borderRadius: "25px",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Grid container style={{ padding: "1%" }}>
              <Grid item xs={5}></Grid>
              {/*<Grid item xs={7}>
                {this.state.spot.street_number} {this.state.spot.street_name}
      </Grid>*/}
              <Grid item xs={5}></Grid>
              <Grid item xs={12}>
                <Typography align="center">
                  {this.state.spot.spot_name}
                </Typography>
                <Typography align="center">
                  {this.state.spot.city} {this.state.spot.state}
                  {", "}
                  {this.state.spot.postal_code}
                </Typography>
              </Grid>
            </Grid>
            <SpotTripInfo></SpotTripInfo>
          </Grid>
          <Grid item xs={5}>
            <p style={{ textAlign: "right", marginRight: "2ch" }}>
              Total price
            </p>
          </Grid>
          <Grid item xs={7}>
            <p>${Number.parseFloat(this.state.price).toPrecision(3)}</p>
          </Grid>
          <Grid item xs={5}>
            <p style={{ textAlign: "right", marginRight: "2ch" }}>Start Date</p>
          </Grid>
          <Grid item xs={7}>
            <p>{this.displayHumanReadableDate(this.state.startDate)}</p>
          </Grid>
          <Grid item xs={5}>
            <p style={{ textAlign: "right", marginRight: "2ch" }}>End Date</p>
          </Grid>
          <Grid item xs={7}>
            <p>{this.displayHumanReadableDate(this.state.endDate)}</p>
          </Grid>
          <Grid item xs={9}>
            <Button
              style={{ width: "100%", marginLeft: "auto" }}
              variant="contained"
              color="primary"
              onClick={this.handleConfirm}
            >
              Confirm Selection
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              style={{ float: "right", width: "100%" }}
              variant="contained"
              color="secondary"
              onClick={() => {
                this.props.cancelCallback();
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ConfirmationPrompt.propTypes = {
  setSpaceData: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  setSpaceData,
};

const mapStateToProps = (state) => ({
  listing: state.listing,
});

export default withRouter(
  connect(mapStateToProps, mapActionsToProps)(ConfirmationPrompt)
);
