class AppConfig {
    public readonly samePagePath = `#`
    public readonly homePagePath = `/home/`
    public readonly careersPagePath = `/careers/`

    public readonly fleetPagePath = `/fleet/`
    public readonly fleetPageAllVehiclesPath = `/fleet/all/`
    public readonly fleetPageSuvOffRoadPath = `/fleet/suv&offraod/`
    public readonly fleetPageLuxuryPath = `/fleet/luxury/`
    public readonly fleetPageSmallPath = `/fleet/small/`
    public readonly fleetPageMediumPath = `/fleet/medium/`
    public readonly fleetPageLargePath = `/fleet/large/`
    public readonly fleetPageVansTrucksPath = `/fleet/vans&trucks/`
    public readonly fleetPageMotorcyclesScootersPath = `/fleet/motorcycles&scooters/`

    public readonly locationsPagePath = `/locations/`
    public readonly helpPagePath = `/help/`
    public readonly signInPagePath = `/sign-in/`
    public readonly servicesPagePath = `/services/`
    public readonly pageNotFoundPath = `/404/`

    private readonly primaryColor = "#952323"
    private readonly secondaryColor = "#A73121"
    private readonly backgroundColor = "#FAF6E9"
}
const appConfig = new AppConfig();
export default appConfig;