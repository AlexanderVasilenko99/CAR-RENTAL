import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import 'react-dropdown/style.css';
import LocationItem from "./LocationItem/LocationItem";
import "./LocationsPage.css";
import appConfig from '../../../../Utils/AppConfig';
import { LocationItemModel } from '../../../../Models/LocationItemModel';


const locations: LocationItemModel[] = [
    new LocationItemModel("Tel Aviv", "Beit Ovad 4 st, Tel Aviv.", 'vasirental@tlv.co.il', "telaviv.jpg",
        < PlaceOutlinedIcon />, appConfig.locationsTelAvivPath),
    new LocationItemModel("Jerusalem", "Tora Mi'Tsiyon 8 st, Jerusalem.", 'vasirental@jer.co.il', "jerusalem.jpg",
        <PlaceOutlinedIcon />, appConfig.locationsJerusalemPath),
    new LocationItemModel("Ben Gurion Airport (TLV)", "Ben Gurion Airport 7015001", "vasirental@bgu.co.il", "bengurion.png",
        <PlaceOutlinedIcon />, appConfig.locationsBenGurionPath),
    new LocationItemModel("Haifa", "Yitshak Sadeh 10 st, Haifa.", "vasirental@hfa.co.il", "haifa.png",
        <PlaceOutlinedIcon />, appConfig.locationsHaifaPath),
    new LocationItemModel("Be'er Sheva", "Henrietta Szold st 2, Be'er Sheva.", 'vasirental@bes.co.il', "beersheva.jpg",
        <PlaceOutlinedIcon />, appConfig.locationsBeerShevaPath),
    new LocationItemModel("Ra'anana", "Klauzner 8 st, Ra'anana.", 'vasirental@raa.co.il', "raanana.jpg",
        <PlaceOutlinedIcon />, appConfig.locationsRaananaPath),
    new LocationItemModel("Tiberias", "Yehuda Halevi 7 st, Tiberias.", 'vasirental@tib.co.il', "tiberias.jpg",
        <PlaceOutlinedIcon />, appConfig.locationsTiberiasPath),
    new LocationItemModel("Eilat", "Sderot HaTmarim 3, Eilat.", 'vasirental@elt.co.il', "eilat.jpg",
        <PlaceOutlinedIcon />, appConfig.locationsEilatPath),
    new LocationItemModel("Eilat Ramon Airport (ETM)", "Be'er Ora", 'vasirental@etm.co.il', "ramon.jpg",
        <PlaceOutlinedIcon />, appConfig.locationsEilatRamonPath)
];

function LocationsPage(): JSX.Element {
    return (
        <div className="LocationsPage">
            <h1>Browse Israel Locations</h1>
            <div className="locations-container">
                {locations?.map(l =>
                    <LocationItem locationCity={l.locationCity} locationStreet={l.locationStreet}
                        locationMail={l.locationMail} locationImageName={l.locationImageName}
                        locationSvgComponent={l.locationSvgComponent} locationRedirectPath={l.locationRedirectPath} />
                )}
            </div>
        </div>
    );
}

export default LocationsPage;
