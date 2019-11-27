import { Components } from "../Forms/FormInterfaces";

export  interface ISupplierSearch {
    womanOwned: boolean;
    veteranOwned: boolean;
    minorityOwned: boolean;
    buyAmerica: boolean;
    byAmerica: boolean;
    greenCertified: boolean;
    isoCertified: boolean;
    establishedProduct:  boolean;
    yearsInOperation: any;
}

export const DiversityOwnershipAndCertifications: ISupplierSearch = { 
    womanOwned: true, 
    veteranOwned: true, 
    minorityOwned: true, 
    buyAmerica: true,
    byAmerica: true, 
    greenCertified:  true, 
    isoCertified:  true,
    establishedProduct:  true, 
    yearsInOperation: "",
};

