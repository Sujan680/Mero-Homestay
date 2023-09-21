import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ latitude, longitude }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  if (isNaN(latitude) || isNaN(longitude)) {
    return <div>Error: Invalid coordinates (lat: {latitude}, lng: {longitude})</div>;
  }

  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCMjeGjVYSuheHUmFxVjszMpxUpEY1hB2Y"
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={() => console.log("Map loaded successfully")}
        onUnmount={() => console.log("Map unmounted")}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
