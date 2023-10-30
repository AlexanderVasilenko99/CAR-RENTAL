export class SingleLink {
    public linkHeader?: string;
    public linkPath?: string;

    constructor(linkHeader: string, linkPath: string) {
        this.linkHeader = linkHeader;
        this.linkPath = linkPath;
    }
}