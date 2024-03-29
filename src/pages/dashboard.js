import React, { Component } from "react";

import clsx from "clsx";

import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import withStyles from "@material-ui/core/styles/withStyles";

import DashMenu from "../components/DashBoard/DashMenu";

const styles = {
  root: {
    display: "flex",
  },
};

class dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DashMenu></DashMenu>
      </div>
    );
  }
}

export default withStyles(styles)(dashboard);
