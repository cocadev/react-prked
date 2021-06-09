import React, { useState } from "react";

function MapPin({ spotInfo, price }) {
  const [hovered, setHovered] = useState(false);

  function mouseHover(e) {
    setHovered(true);
    e.target.style.background = "lightgreen";
    e.target.style.color = "black";
    console.log(`searching for id spotListing${spotInfo.spotId}`);
    let listingElement = document.getElementById(
      `spotListing${spotInfo.spotId}`
    );
    listingElement.style.backgroundColor = "lightblue";
  }

  function mouseLeave(e) {
    setHovered(false);
    e.target.style.background = "#4a8f88";
    e.target.style.color = "white";
    let listingElement = document.getElementById(
      `spotListing${spotInfo.spotId}`
    );
    listingElement.style.backgroundColor = "white";
  }

  return (
    <div
      className="map-pin"
      onClick={() => {
        let listingElement = document.getElementById(
          `spotListing${spotInfo.spotId}`
        );
        let buttonElement = listingElement.querySelector("button");
        buttonElement.click();
        // console.log("user clicked spot on map");
        // console.log(spotInfo);
      }}
      onMouseEnter={mouseHover}
      onMouseOut={mouseLeave}
      style={{
        backgroundColor: "#4a8f88",
        width: "65px",
        borderRadius: "5px",
        margin: "0",
        padding: "0",
      }}
    >
      <p
        className="map-pin-text"
        style={{
          fontWeight: "bold",
          padding: "3px",
          borderRadius: "5px",
          marginBottom: "0px",
          backgroundColor: "#4a8f88",
          color: "white",
        }}
      >
        ${Number.parseFloat(price).toPrecision(3)}
      </p>

      {/* <CSSTransition
        in={hovered}
        classNames="trans"
        timeout={150}
        unmountOnExit
        appear
      > */}
      {hovered && (
        <div
          className="expanded-map-pin"
          style={{
            borderRadius: "5px",
            backgroundColor: "#e8f7e6",
            position: "absolute",
            left: "-1.5vw",
            width: "8vw",
            zIndex: "5",
          }}
        >
          <p
            className="expanded-map-pin-text"
            style={{ borderRadius: "5px", alignContent: "middle" }}
          >
            {spotInfo.spot_name}
          </p>
        </div>
      )}
      {/* </CSSTransition> */}
    </div>
  );
}

export default MapPin;
