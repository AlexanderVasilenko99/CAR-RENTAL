class LocationItemModel {
    public locationCity: string;
    public locationStreet: string;
    public locationMail: string;
    public locationImageName: string;
    public locationSvgComponent: any;
    public locationRedirectPath: string;

    constructor(locationCity: string, locationStreet: string, locationMail: string, locationImageName: string,
        locationSvgComponent: any, locationRedirectPath: string) {
        this.locationCity = locationCity;
        this.locationStreet = locationStreet;
        this.locationMail = locationMail;
        this.locationImageName = locationImageName;
        this.locationSvgComponent = locationSvgComponent;
        this.locationRedirectPath = locationRedirectPath;
    }
}
export default LocationItemModel;