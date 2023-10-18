import LocationCoordinatesModel from "./LocationCoordinatesModel";
class LocationItemAccordionModel {
    public city: string;
    public address: string;
    public workingHours?: string;
    public phoneNumber?: string;
    public email?: string;
    public redirectPath: string;
    public aboutLocation?: string;
    public reachOfficeInstructions?: string;

    public locationParams?:LocationCoordinatesModel;
}
export default LocationItemAccordionModel;