export class CareerBenefitModel {
    public benefitHeader: string;
    public benefitImgName: string;
    public benefitText: string;

    constructor(benefitHeader: string, benefitImgName: string, benefitText: string) {
        this.benefitHeader = benefitHeader;
        this.benefitImgName = benefitImgName;
        this.benefitText = benefitText;
    }
}