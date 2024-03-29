import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";

import ReactStreetview from "react-streetview";

const API_KEY = "AIzaSyBE9_zbuGypHWKDfhcdrPyzbXU6Ej4-u6M";

class streetview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  mapBookingDetailsToState = (data) => {
    this.setState({
      data: data,
    });
  };

  componentDidMount() {
    const { data } = this.props;
    this.mapBookingDetailsToState(data);
  }

  render() {
    const { long } = this.props.location.state;
    const { lat } = this.props.location.state;

    console.log(long); // "bar"
    console.log(lat); // "bar"

    const streetViewPanoramaOptions = {
      position: { lat: lat, lng: long },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
    };

    return (
      <div
        style={{
          width: window.screen.width,
          height: window.screen.height,
        }}
      >
        <ReactStreetview
          apiKey={API_KEY}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

streetview.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(streetview);
