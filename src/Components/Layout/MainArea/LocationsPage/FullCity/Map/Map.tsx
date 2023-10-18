import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import LocationCoordinatesModel from '../../../../../../Models/LocationCoordinatesModel';
import "./Map.css";

function Map(coordinates:LocationCoordinatesModel): JSX.Element {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDhcjPG2KtIwgp0LWz00pHLsj9xqrmmbQw"
    })

    return (
        <div className="Map">
            {isLoaded ?
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coordinates}
                    zoom={14}
                // onLoad={onLoad}
                // onUnmount={onUnmount}
                >
                    <></>
                    <Marker position={coordinates} />
                </GoogleMap> : <></>}
        </div >
    );
}

export default Map;
