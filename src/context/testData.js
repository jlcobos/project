// data navigation: tierX
// .requirements.general
//      .name .displayName .requirements
// .requirements.components 
//      .component . displayName. .requirements
// .requirements.components.requirements
//              .requirement .displayName .text 
const testData = {
    tier1: {
        requirements: {
            general: [
                {
                    name: "ada",
                    displayName: "American Disabilities Act",
                    text: ["ADA reqs"],
                },
                {
                    name: "fst",
                    displayName: "Flame, Smoke, and Toxicity",
                    text: ["Flame, smoke, and toxicity reqs"],
                },
                {
                    name: "gst",
                    displayName: "General Statement for Crashworthiness (interior fittings and attachments)",
                    text: ["GST reqs (Apta, PRIIA, California Bulletins, FRA, CFR)"],
                },
            ],
            components: [
                {
                    name: "seats",
                    displayName: "Seats",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 seats www.google.com/***linkText"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 seats"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 seats"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text:["Design guidelines for tier 1 seats"],
                        },
                    ],
                    suppliers: [
                        {
                            name: "abc",
                            fstCompliant: "Yes",
                            buyUSA: "Yes",
                            portfolio: [],
                            contacts: [
                                {
                                    name: "Mike Smith",
                                    position: "Director of Sales",
                                    phone: "800 000 000",
                                    cell: "000 000 000",
                                    email: "mike@abc.com",
                                    timeZone: "est"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "tables",
                    displayName: "Tables",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 tables"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 tables"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 tables"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 tables"],
                        },
                    ]
                },
                {
                    name: "sidewalls",
                    displayName: "Sidewalls",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 sidewalls"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 sidewalls"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 sidewalls"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 sidewalls"],
                        },
                    ]
                },
                {
                    name: "windows",
                    displayName: "Windows",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 windows"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 windows"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 windows"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 windows"],
                        },
                    ]
                },
                {
                    name: "carpets",
                    displayName: "Carpets",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 carpets"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 carpets"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 carpets"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 carpets"],
                        },
                    ]
                },
                {
                    name: "rubber flooring",
                    displayName: "Rubber Flooring",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 rubber flooring"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 rubber flooring"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 rubber flooring"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 rubber flooring"],
                        },
                    ]
                },
                {
                    name: "vestibule doors",
                    displayName: "Vestibule Doors",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 Vestibule doors"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 Vestibule doors"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 Vestibule doors"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 Vestibule doors"],
                        },
                    ]
                },
                {
                    name: "floors",
                    displayName: "Floors",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 Floors"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 Floors"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 Floors"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 Floors"],
                        },
                    ]
                },
                {
                    name: "stanchions and grab handles",
                    displayName: "Stanchions and Grab Handles",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 stanchions and grab handles"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 stanchions and grab handles"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 stanchions and grab handles"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 stanchions and grab handles"],
                        },
                    ]
                },
                {
                    name: "handholds",
                    displayName: "Handholds",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 1 Handholds"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 1 Handholds"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 1 Handholds"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 1 Handholds"],
                        },
                    ]
                },
            ] 
        }
    },
    tier2: {
        requirements: {
            general: [
                {
                    name: "ada",
                    displayName: "American Disabilities Act",
                    text: "ADA reqs",
                },
                {
                    name: "fst",
                    displayName: "Flame, Smoke, and Toxicity",
                    text: ["Flame, smoke, and toxicity reqs"],
                },
                {
                    name: "gst",
                    displayName: "General Statement for Crashworthiness (interior fittings and attachments)",
                    text: ["GST reqs (Apta, PRIIA, California Bulletins, FRA, CFR)"],
                },
            ],
            components: [
                {
                    name: "seats",
                    displayName: "Seats",
                    text: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 seats"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 seats"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 seats"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 seats"],
                        },
                    ]
                },
                {
                    name: "tables",
                    displayName: "Tables",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 tables"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 tables"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 tables"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 tables"],
                        },
                    ]
                },
                {
                    name: "sidewalls",
                    displayName: "Sidewalls",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 sidewalls"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 sidewalls"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 sidewalls"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 sidewalls"],
                        },
                    ]
                },
                {
                    name: "windows",
                    displayName: "Windows",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 windows"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 windows"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 windows"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 windows"],
                        },
                    ]
                },
                {
                    name: "carpets",
                    displayName: "Carpets",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 carpets"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 carpets"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 carpets"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 carpets"],
                        },
                    ]
                },
                {
                    name: "rubber flooring",
                    displayName: "Rubber Flooring",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 rubber flooring"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 rubber flooring"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 rubber flooring"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 rubber flooring"],
                        },
                    ]
                },
                {
                    name: "vestibule doors",
                    displayName: "Vestibule Doors",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 Vestibule doors"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 Vestibule doors"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 Vestibule doors"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 Vestibule doors"],
                        },
                    ]
                },
                {
                    name: "floors",
                    displayName: "Floors",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 Floors"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 Floors"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 Floors"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 Floors"],
                        },
                    ]
                },
                {
                    name: "stanchions and grab handles",
                    displayName: "Stanchions and Grab Handles",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 stanchions and grab handles"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 stanchions and grab handles"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 stanchions and grab handles"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 stanchions and grab handles"],
                        },
                    ]
                },
                {
                    name: "handholds",
                    displayName: "Handholds",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 2 Handholds"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 2 Handholds"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 2 Handholds"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 2 Handholds"],
                        },
                    ]
                },
            ] 
        }
    },
    tier3: {
        requirements: {
            general: [
                {
                    name: "ada",
                    displayName: "American Disabilities Act",
                    text: ["ADA reqs"],
                },
                {
                    name: "fst",
                    displayName: "Flame, Smoke, and Toxicity",
                    text: ["Flame, smoke, and toxicity reqs"],
                },
                {
                    name: "gst",
                    displayName: "General Statement for Crashworthiness (interior fittings and attachments)",
                    text: ["GST reqs (Apta, PRIIA, California Bulletins, FRA, CFR)"],
                },
            ],
            components: [
                {
                    name: "seats",
                    displayName: "Seats",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 seats"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 seats"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 seats"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 seats"],
                        },
                    ]
                },
                {
                    name: "tables",
                    displayName: "Tables",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 tables"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 tables"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 tables"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 tables"],
                        },
                    ]
                },
                {
                    name: "sidewalls",
                    displayName: "Sidewalls",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 sidewalls"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 sidewalls"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 sidewalls"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 sidewalls"],
                        },
                    ]
                },
                {
                    name: "windows",
                    displayName: "Windows",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 windows"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 windows"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 windows"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 windows"],
                        },
                    ]
                },
                {
                    name: "carpets",
                    displayName: "Carpets",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 carpets"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 carpets"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 carpets"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 carpets"],
                        },
                    ]
                },
                {
                    name: "rubber flooring",
                    displayName: "Rubber Flooring",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 rubber flooring"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 rubber flooring"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 rubber flooring"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 rubber flooring"],
                        },
                    ]
                },
                {
                    name: "vestibule doors",
                    displayName: "Vestibule Doors",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 Vestibule doors"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 Vestibule doors"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 Vestibule doors"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 Vestibule doors"],
                        },
                    ]
                },
                {
                    name: "floors",
                    displayName: "Floors",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 Floors"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 Floors"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 Floors"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 Floors"],
                        },
                    ]
                },
                {
                    name: "stanchions and grab handles",
                    displayName: "Stanchions and Grab Handles",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 stanchions and grab handles"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 stanchions and grab handles"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 stanchions and grab handles"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 stanchions and grab handles"],
                        },
                    ]
                },
                {
                    name: "handholds",
                    displayName: "Handholds",
                    requirements: [
                        {
                            name: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: ["Flame smoke and toxicity reqs for tier 3 Handholds"],
                        },
                        {
                            name: "structural",
                            displayName: "Structural",
                            text: ["structural reqs for tier 3 Handholds"],
                        },
                        {
                            name: "ada",
                            displayName: "American Disability Act",
                            text: ["ADA reqs for tier 3 Handholds"],
                        },
                        {
                            name: "design guidelines",
                            displayName: "Design Guidelines",
                            text: ["Design guidelines for tier 3 Handholds"],
                        },
                    ]
                },
            ] 
        }
    },
}
export default testData; 