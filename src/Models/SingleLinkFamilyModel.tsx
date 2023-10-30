import { SingleLink } from "./SingleLink";

export class SingleLinkFamilyModel {
    public header: string;
    public singleLinks: SingleLink[];

    constructor(header: string, singleLinks: SingleLink[]) {
        this.header = header;
        this.singleLinks = singleLinks;
    }
}