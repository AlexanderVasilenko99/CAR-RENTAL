import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import 'react-dropdown/style.css';
import LocationItem from "./LocationItem/LocationItem";
import "./LocationsPage.css";
import appConfig from '../../../../Utils/AppConfig';


function LocationsPage(): JSX.Element {

    return (
        <div className="LocationsPage">
            <h1>Browse Israel Locations</h1>
            <div className="locations-container">

                <LocationItem locationCity="Tel Aviv" locationStreet="Beit Ovad 4 st, Tel Aviv." locationMail='vasirental@tlv.co.il'
                    locationImageName="telaviv.jpg" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsTelAvivPath} />

                <LocationItem locationCity="Jerusalem" locationStreet="Tora Mi'Tsiyon 8 st, Jerusalem." locationMail='vasirental@jer.co.il'
                    locationImageName="jerusalem.jpg" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsJerusalemPath} />

                <LocationItem locationCity="Ben Gurion Airport (TLV)" locationStreet="Ben Gurion Airport 7015001" locationMail='vasirental@bgu.co.il'
                    locationImageName="bengurion.png" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsBenGurionPath} />

                <LocationItem locationCity="Haifa" locationStreet="Yitshak Sadeh 10 st, Haifa." locationMail='vasirental@hfa.co.il'
                    locationImageName="haifa.png" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsHaifaPath} />

                <LocationItem locationCity="Be'er Sheva" locationStreet="Henrietta Szold st 2, Be'er Sheva." locationMail='vasirental@bes.co.il'
                    locationImageName="beersheva.jpg" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsBeerShevaPath} />

                <LocationItem locationCity="Ra'anana" locationStreet="Klauzner 8 st, Ra'anana." locationMail='vasirental@raa.co.il'
                    locationImageName="raanana.jpg" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsRaananaPath} />

                <LocationItem locationCity="Tiberias" locationStreet="Yehuda Halevi 7 st, Tiberias." locationMail='vasirental@tib.co.il'
                    locationImageName="tiberias.jpg" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsTiberiasPath} />

                <LocationItem locationCity="Eilat" locationStreet="Sderot HaTmarim 3, Eilat." locationMail='vasirental@elt.co.il'
                    locationImageName="eilat.jpg" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsEilatPath} />


                <LocationItem locationCity="Eilat Ramon Airport (ETM)" locationStreet="Be'er Ora" locationMail='vasirental@etm.co.il'
                    locationImageName="ramon.jpg" locationSvgComponent={<PlaceOutlinedIcon />} locationRedirectPath={appConfig.locationsEilatRamonPath} />

            </div>
        </div>
    );
}

export default LocationsPage;
