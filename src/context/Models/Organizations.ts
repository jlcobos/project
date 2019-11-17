import { ISupplierSearch } from "./SupplierSearch";

// import { Countries, States, Provinces, DiversityAndOwnership } from "./Enums";

export interface IOrganization extends ISupplierSearch {
    name: string;
    phoneNumber: string;
    website: string;
    yearFounded: string;
    supplier: boolean;
    buyAmerica: boolean;
    byAmerica: boolean;
    minorityOwned: boolean;
    womanOwned: boolean;
    veteranOwned: boolean;
    isoCertified: boolean;
    greenCertified: boolean;
    establishedProduct: boolean;
    numberOfEmployees: string;
    numberOfLocations: string;
    annualSales: string;
    classifications: string[];
    address: {
        street: string;
        city: string;
        state_province: string;
        postalCode: string;
        country: string;
    };
    components: string;
    adminUsers: string[];
    users: string[];
}