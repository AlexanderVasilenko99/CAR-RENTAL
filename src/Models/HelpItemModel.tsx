export class HelpItemModel {
    public header?: string;
    public redirectPath?: string;
    public text?: string;

    constructor(header: string, redirectPath: string, text: string) {
        this.header = header;
        this.redirectPath = redirectPath;
        this.text = text;
    }
}