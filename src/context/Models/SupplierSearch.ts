import { Components } from "../Forms/FormInterfaces";

export  interface ISupplierSearch {
    buyAmerica: boolean;
    byAmerica: boolean;
    womanOwned: boolean;
    minorityOwned: boolean;
    veteranOwned: boolean;
    greenCertified: boolean;
    isoCertified: boolean;
    establishedProduct:  boolean;
    yearsInOperation: any;
}

export const DiversityOwnershipAndCertifications: ISupplierSearch = { 
    veteranOwned: true, 
    minorityOwned: true, 
    womanOwned: true, 
    buyAmerica: true,
    byAmerica: true, 
    greenCertified:  true, 
    establishedProduct:  true, 
    isoCertified:  true,
    yearsInOperation: "",
};

