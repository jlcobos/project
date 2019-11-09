// import { Countries, States, Provinces, DiversityAndOwnership } from "./Enums";

export interface IOrganization {
    name: string;
    phoneNumbers: { officeNumber: string, mobileNumber: string };
    email: {[key: string]: string}[];
    website: string;
    yearFounded: string;
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
}