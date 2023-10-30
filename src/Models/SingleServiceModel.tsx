export class SingleServiceModel {
    public serviceHeader: string;
    public serviceImageName: string;
    public destinationUrl: string;
    public serviceParagraph: string;

    constructor(serviceHeader: string, serviceImageName: string, destinationUrl: string, serviceParagraph: string) {
        this.serviceHeader = serviceHeader;
        this.serviceImageName = serviceImageName;
        this.destinationUrl = destinationUrl;
        this.serviceParagraph = serviceParagraph;
    }
}
