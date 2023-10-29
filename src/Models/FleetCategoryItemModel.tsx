class FleetCategoryItemModel {
    public vehicleName: string;
    public imageName: string;
    public transmission: string;
    public passengers: number;
    public doors: number;
    public luggage: number;

    public tankCapacity: string;
    public fuel: string;
    public trunkCapacity: string;
    public airConditioning?: boolean;
    public radio?: boolean;

    public redirectPath: string;


}
export default FleetCategoryItemModel;

export enum TransmissionTypes {
    manuel = "Manual",
    automatic = "Automatic",
    robotic = "Robotic"
}