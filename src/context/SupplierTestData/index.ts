interface ISupplierDisplayData {
    company: string;
    address: string;
    companyPhone: string;
    email: string;
    website: string;
    yearFounded: string;
    diversityAndOwnership: string[];
    classifications: string[];
    numberOfEmployees: number;
    numberOfLocations: number;
    contacts: {name: string, phone: string; email: string; primaryContact: boolean}[];
}

const supplierTestData: Array<ISupplierDisplayData> = [
    {
        company: "Abc Manufacturing",
        address: "123 Main st, Arbor City, WI 23848",
        companyPhone: "000 000 000",
        email: "sales@abcmanufacturing.com",
        website: "www.abcmanufactruing.com",
        yearFounded: "1998",
        diversityAndOwnership: ["by america", "minority owned"],
        classifications: [],
        numberOfEmployees: 35,
        numberOfLocations: 1,
        contacts: [
            {
                name: "Michael Smith",
                phone: "000 000 000",
                email: "msmith@abcmanufacturing.com",
                primaryContact: true,
            },
        ] ,
    },
    {
        company: "Glenn Hill Seats",
        address: "E seashore way, Redwood city, CA 93243",
        companyPhone: "000 000 000",
        email: "sales@glennhillseats.com",
        website: "www.glennhillseats.com",
        yearFounded: "2009",
        diversityAndOwnership: ["woman owned"],
        classifications: ["iso 9000"],
        numberOfEmployees: 35,
        numberOfLocations: 1,
        contacts: [
            {
                name: "Elaine Tanenbaum",
                phone: "000 000 000",
                email: "et@glennhillseats.com",
                primaryContact: true,
            },
        ] ,
    }
];

export default supplierTestData;