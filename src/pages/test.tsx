import { useState } from "react";
import { Button } from "react-bootstrap";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const MyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5Ze47MCUqSpm6JwVHGjwbeUsOlPrpAO0",
  });

  const [lat, setLat] = useState(3);
  const [long, setLong] = useState(3);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(changeCoords);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function changeCoords(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    setLat(latitude);
    setLong(longitude);
  }

  if (isLoaded) {
    return (
      <>
        <h1>Google Maps</h1>
        <p>
          Current location: {lat}, {long}
        </p>
        <GoogleMap
          zoom={15}
          center={{ lat: lat, lng: long }}
          mapContainerClassName="my-map"
        >
          <MarkerF position={{ lat: lat, lng: long }} />
        </GoogleMap>
        <Button onClick={getLocation}>Get Current Location</Button>
      </>
    );
  } else {
    return <p>Waiting for Google Maps API to load</p>;
  }
};

export default MyMap;
