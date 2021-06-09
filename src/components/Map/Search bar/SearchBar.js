import React from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import GpxFixedIcon from "@material-ui/icons/GpsFixed";
import RoomIcon from '@material-ui/icons/Room';

import theme from "./SearchBar.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const getSuggestionValue = (suggestion) => suggestion.name;

// the elements that get created when user types in search bar
const renderSuggestion = (suggestion) => (
  <ListItem button>
    <ListItemIcon>
      <RoomIcon />
    </ListItemIcon>
    <ListItemText>{suggestion.name}</ListItemText>
  </ListItem>
);

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });

    //TODO: is choosing first one needs to choose the one that is clicked
    // when there is a click, we send a callback to the parent (home) and
    // then start the map and listing explorer
    /* if (method === "click") {
      let selection = this.state.suggestions[0];
      this.props.parentCallback(selection);
    }*/
  };

  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    if (method === "click") {
      let selection = this.state.suggestions[suggestionIndex];
      this.props.parentCallback(selection);
    }
  };

  // whenever user edits the search bar, sends a request to google to get suggestions
  onSuggestionsFetchRequested = ({ value }) => {
    axios
      .get("/maps/api/place/autocomplete/json?", {
        params: {
          input: value,
          types: ["address"],
          language: "en",
          key: API_KEY,
        },
      })
      .then((response) => {
        let places = [];
        for (const place of response.data.predictions) {
          places.push({ name: place.description, placeId: place.place_id });
        }
        this.setState({
          suggestions: places,
        });
      })
      .catch(function (err) {
        console.log(`error reading google places api: ${err}`);
      });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: this.props.value || "Where do you want to park?",
      value,
      onChange: this.onChange,
    };

    /* if (this.props.value !== "") {
      inputProps = {
        placeholder: "Search...",
        value: this.props.value,
        onChange: this.onChange,
        style,
      };
    }*/

    return (
      <div style={{ position: "relative" }}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
          theme={theme}
        />
        <label className={theme.label}>Parking At</label>
        <GpxFixedIcon color="primary" className={theme.location} />
      </div>
    );
  }
}

export default SearchBar;
