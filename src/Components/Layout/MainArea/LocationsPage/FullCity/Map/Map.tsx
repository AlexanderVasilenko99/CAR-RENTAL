import GoogleMapReact from "google-map-react";
import "./Map.css";
import React, { useEffect } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useParams } from "react-router-dom";

// AIzaSyDhcjPG2KtIwgp0LWz00pHLsj9xqrmmbQw
// export enum locationsEnum {
//     TEL_AVIV = 0,
//     JERUSALEM = 1,
//     BEN_GURION = 2,
//     HAIFA = 3,
//     BEER_SHEVA = 4,
//     RAANANA = 5,
//     TIBERIAS = 6,
//     EILAT = 7,
//     RAMON = 8,
// }

function Map(): JSX.Element {

    const loc = useParams();
    useEffect(() => {
        console.log(loc);
    }, [])

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: 32.179297,
        lng: 34.875515
    };
    // const locations = [{
    //     lat: 32.179297, //raanana
    //     lng: 34.875515
    // }, {
    //     lat: 32.0644152, //tel aviv
    //     lng: 34.7839828
    // }]

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDhcjPG2KtIwgp0LWz00pHLsj9xqrmmbQw"
    })

    return (
        <div className="Map">
            {isLoaded ?
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                // onLoad={onLoad}
                // onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                    <Marker position={center} />
                </GoogleMap> : <></>}
        </div >
    );
}

export default Map;
