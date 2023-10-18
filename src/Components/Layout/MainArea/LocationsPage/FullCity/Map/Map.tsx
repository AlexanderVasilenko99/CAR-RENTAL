import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import locationsmapenum from '../../../../../../Enums/LocationsMapEnum';
import "./Map.css";

function Map(id: { enumId: number }): JSX.Element {
    const coords = locationsmapenum.locations[id.enumId];
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
                    center={coords}
                    zoom={14}
                // onLoad={onLoad}
                // onUnmount={onUnmount}
                >
                    <></>
                    <Marker position={coords} />
                </GoogleMap> : <></>}
        </div >
    );
}

export default Map;
