import React, { Component } from "react";

import MyProfile from "../components/DashBoard/My Profile/MyProfile";
import AccountInfo from "../components/DashBoard/My Profile/AccountInfo";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Dashboard from "./dashboard";

const styles = (theme) => ({});

class myProfile extends Component {
  /*constructor() {
    super();
    this.state = {
      user: {},
    };
  }*/
  mapUserDetailsToState = (user) => {
    this.setState({
      email: user.email ? user.email : "",
      phoneNumber: user.phoneNumber ? user.phoneNumber : "",
    });
  };

  componentDidMount() {
    const { user } = this.props;
    this.mapUserDetailsToState(user);
  }
  render() {
    const { classes, user } = this.props;
    return (
      <Container>
        <MyProfile />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// const mapActionsToProps = { logoutUser, uploadImage };

myProfile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(myProfile));
