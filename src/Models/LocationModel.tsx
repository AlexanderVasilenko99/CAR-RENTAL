import { LocationCoordinatesModel } from "./LocationCoordinatesModel";


export class LocationCoordsModel {
    public lat: number;
    public lng: number;

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}
export class LocationModel {

    public city: string;
    public street: string;
    public imageName: string;
    public full_address: string;
    public svgComponent: any;
    public workingHours?: string;
    public phoneNumber: string;
    public email: string;

    public aboutLocation: string;
    public reachOfficeInstructions?: string;
    public locationParams: LocationCoordinatesModel;
    public redirectPath: string;


    constructor(city: string, street: string, imageName: string, full_address: string, svgComponent: any, workingHours: string,
        phoneNumber: string, email: string, aboutLocation: string, reachOfficeInstructions: string,
        locationParams: LocationCoordsModel, redirectPath: string) {
        this.city = city;
        this.street = street;
        this.imageName = imageName;
        this.full_address = full_address;
        this.svgComponent = svgComponent;
        this.workingHours = workingHours;
        this.phoneNumber = phoneNumber;
        this.email = email;

        this.aboutLocation = aboutLocation;
        this.reachOfficeInstructions = reachOfficeInstructions;
        this.locationParams = locationParams;
        this.redirectPath = redirectPath;
    }
}