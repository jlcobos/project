// import { Countries, States, Provinces, DiversityAndOwnership } from "./Enums";

export interface IOrganization {
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
    adminUsers: string[];
    users: string[];
}