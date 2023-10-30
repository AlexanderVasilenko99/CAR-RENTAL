class VehicleCategoryItem {
    public vehicleCategoryName: string;
    public vehicleCategoryImgName: string;
    public vehicleCategoryRedirectPath: string;

    constructor(vehicleCategoryName: string, vehicleCategoryImgName: string, vehicleCategoryRedirectPath: string) {
        this.vehicleCategoryName = vehicleCategoryName;
        this.vehicleCategoryImgName = vehicleCategoryImgName;
        this.vehicleCategoryRedirectPath = vehicleCategoryRedirectPath;

    }
}
export default VehicleCategoryItem;