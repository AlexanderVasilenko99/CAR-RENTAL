export enum LocationsEnum {
    TEL_AVIV = 0,
    JERUSALEM = 1,
    BEN_GURION = 2,
    HAIFA = 3,
    BEER_SHEVA = 4,
    RAANANA = 5,
    TIBERIAS = 6,
    EILAT = 7,
    RAMON = 8
}
class LocationsMapEnum {
    private readonly telAviv = { lat: 32.0644152, lng: 34.7839828 };
    private readonly jerusalem = { lat: 31.7897215, lng: 35.2024723 };
    private readonly benGurion = { lat: 32.0004464, lng: 34.865744 };
    private readonly haifa = { lat: 32.824678, lng: 34.9856795 };
    private readonly beerSheva = { lat: 31.2477039, lng: 34.7993576 };
    private readonly raanana = { lat: 32.179297, lng: 34.875515 };
    private readonly tiberias = { lat: 32.789734, lng: 35.5305351 };
    private readonly eilat = { lat: 29.5547074, lng: 34.950547 };
    private readonly beerOra = { lat: 29.7251145, lng: 35.0032591 };

    public readonly locations = [this.telAviv, this.jerusalem,
    this.benGurion, this.haifa, this.beerSheva, this.raanana,
    this.tiberias, this.eilat, this.beerOra];
}
const locationsmapenum = new LocationsMapEnum();
export default locationsmapenum;