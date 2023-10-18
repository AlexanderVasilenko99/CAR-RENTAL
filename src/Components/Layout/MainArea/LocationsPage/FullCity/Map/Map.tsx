import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import "./Map.css";
import locationsmapenum, { LocationsEnum } from '../../../../../../Enums/LocationsMapEnum';
import { useEffect, useState } from 'react';


// AIzaSyDhcjPG2KtIwgp0LWz00pHLsj9xqrmmbQw

function Map(id: { enumId: number }): JSX.Element {
    let [coords, setCoords] = useState<{ lat: number, lng: number }>();
    useEffect(() => {
        const coords = locationsmapenum.locations[id.enumId];
        setCoords(coords);
    }, [])
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
