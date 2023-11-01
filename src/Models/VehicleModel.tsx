import { AllVehiclesByCategories } from "./AllVehiclesByCategories";

export class VehicleModel extends AllVehiclesByCategories {
    public id: number

    public full_name: string;
    public make: string;
    public model: string;
    public make_year: number;
    public image_name: string;
    public engine_size: number;
    public turbo: boolean;
    public horse_power: number;
    public transmission: string;
    public seats: number;
    public doors: number;
    public luggage: number;
    public trunk_capacity: string;
    public tank_capacity: string;
    public fuel: string;
    public radio: boolean;
    public air_conditioner: boolean;
    public redirect_path: string;
    public price: number;

    // for bikes:
    public license: string;
    public type: string;
    public engine_configuration: string;
    public abs: boolean;
    public cbs: boolean;
    public weight: number;
    public luggage_available: string;
}