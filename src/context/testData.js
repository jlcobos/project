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
                    requirements: "ADA reqs",
                },
                {
                    name: "fst",
                    displayName: "Flame, Smoke, and Toxicity",
                    requirements: "Flame, smoke, and toxicity reqs",
                },
                {
                    name: "gst",
                    displayName: "General Statement for Crashworthiness (interior fittings and attachments)",
                    requirements: "GST reqs (Apta, PRIIA, California Bulletins, FRA, CFR)",
                },
            ],
            components: [
                {
                    name: "seats",
                    displayName: "Seats",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 seats",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 seats",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 seats",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 seats",
                        },
                    ]
                },
                {
                    name: "tables",
                    displayName: "Tables",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 tables",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 tables",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 tables",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 tables",
                        },
                    ]
                },
                {
                    name: "sidewalls",
                    displayName: "Sidewalls",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 sidewalls",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 sidewalls",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 sidewalls",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 sidewalls",
                        },
                    ]
                },
                {
                    name: "windows",
                    displayName: "Windows",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 windows",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 windows",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 windows",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 windows",
                        },
                    ]
                },
                {
                    name: "carpets",
                    displayName: "Carpets",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 carpets",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 carpets",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 carpets",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 carpets",
                        },
                    ]
                },
                {
                    name: "rubber flooring",
                    displayName: "Rubber Flooring",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 rubber flooring",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 rubber flooring",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 rubber flooring",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 rubber flooring",
                        },
                    ]
                },
                {
                    name: "vestibule doors",
                    displayName: "Vestibule Doors",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 Vestibule doors",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 Vestibule doors",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 Vestibule doors",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 Vestibule doors",
                        },
                    ]
                },
                {
                    name: "floors",
                    displayName: "Floors",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 Floors",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 Floors",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 Floors",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 Floors",
                        },
                    ]
                },
                {
                    name: "stanchions and grab handles",
                    displayName: "Stanchions and Grab Handles",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 stanchions and grab handles",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 stanchions and grab handles",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 stanchions and grab handles",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 stanchions and grab handles",
                        },
                    ]
                },
                {
                    name: "handholds",
                    displayName: "Handholds",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 1 Handholds",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 1 Handholds",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 1 Handholds",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 1 Handholds",
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
                    requirements: "ADA reqs",
                },
                {
                    name: "fst",
                    displayName: "Flame, Smoke, and Toxicity",
                    requirements: "Flame, smoke, and toxicity reqs",
                },
                {
                    name: "gst",
                    displayName: "General Statement for Crashworthiness (interior fittings and attachments)",
                    requirements: "GST reqs (Apta, PRIIA, California Bulletins, FRA, CFR)",
                },
            ],
            components: [
                {
                    name: "seats",
                    displayName: "Seats",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 seats",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 seats",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 seats",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 seats",
                        },
                    ]
                },
                {
                    name: "tables",
                    displayName: "Tables",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 tables",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 tables",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 tables",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 tables",
                        },
                    ]
                },
                {
                    name: "sidewalls",
                    displayName: "Sidewalls",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 sidewalls",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 sidewalls",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 sidewalls",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 sidewalls",
                        },
                    ]
                },
                {
                    name: "windows",
                    displayName: "Windows",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 windows",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 windows",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 windows",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 windows",
                        },
                    ]
                },
                {
                    name: "carpets",
                    displayName: "Carpets",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 carpets",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 carpets",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 carpets",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 carpets",
                        },
                    ]
                },
                {
                    name: "rubber flooring",
                    displayName: "Rubber Flooring",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 rubber flooring",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 rubber flooring",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 rubber flooring",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 rubber flooring",
                        },
                    ]
                },
                {
                    name: "vestibule doors",
                    displayName: "Vestibule Doors",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 Vestibule doors",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 Vestibule doors",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 Vestibule doors",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 Vestibule doors",
                        },
                    ]
                },
                {
                    name: "floors",
                    displayName: "Floors",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 Floors",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 Floors",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 Floors",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 Floors",
                        },
                    ]
                },
                {
                    name: "stanchions and grab handles",
                    displayName: "Stanchions and Grab Handles",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 stanchions and grab handles",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 stanchions and grab handles",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 stanchions and grab handles",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 stanchions and grab handles",
                        },
                    ]
                },
                {
                    name: "handholds",
                    displayName: "Handholds",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 2 Handholds",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 2 Handholds",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 2 Handholds",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 2 Handholds",
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
                    requirements: "ADA reqs",
                },
                {
                    name: "fst",
                    displayName: "Flame, Smoke, and Toxicity",
                    requirements: "Flame, smoke, and toxicity reqs",
                },
                {
                    name: "gst",
                    displayName: "General Statement for Crashworthiness (interior fittings and attachments)",
                    requirements: "GST reqs (Apta, PRIIA, California Bulletins, FRA, CFR)",
                },
            ],
            components: [
                {
                    name: "seats",
                    displayName: "Seats",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 seats",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 seats",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 seats",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 seats",
                        },
                    ]
                },
                {
                    name: "tables",
                    displayName: "Tables",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 tables",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 tables",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 tables",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 tables",
                        },
                    ]
                },
                {
                    name: "sidewalls",
                    displayName: "Sidewalls",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 sidewalls",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 sidewalls",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 sidewalls",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 sidewalls",
                        },
                    ]
                },
                {
                    name: "windows",
                    displayName: "Windows",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 windows",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 windows",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 windows",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 windows",
                        },
                    ]
                },
                {
                    name: "carpets",
                    displayName: "Carpets",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 carpets",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 carpets",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 carpets",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 carpets",
                        },
                    ]
                },
                {
                    name: "rubber flooring",
                    displayName: "Rubber Flooring",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 rubber flooring",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 rubber flooring",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 rubber flooring",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 rubber flooring",
                        },
                    ]
                },
                {
                    name: "vestibule doors",
                    displayName: "Vestibule Doors",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 Vestibule doors",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 Vestibule doors",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 Vestibule doors",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 Vestibule doors",
                        },
                    ]
                },
                {
                    name: "floors",
                    displayName: "Floors",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 Floors",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 Floors",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 Floors",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 Floors",
                        },
                    ]
                },
                {
                    name: "stanchions and grab handles",
                    displayName: "Stanchions and Grab Handles",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 stanchions and grab handles",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 stanchions and grab handles",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 stanchions and grab handles",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 stanchions and grab handles",
                        },
                    ]
                },
                {
                    name: "handholds",
                    displayName: "Handholds",
                    requirements: [
                        {
                            requirement: "fst",
                            displayName: "Flame, Smoke, and Toxicity",
                            text: "Flame smoke and toxicity reqs for tier 3 Handholds",
                        },
                        {
                            requirement: "structural",
                            displayName: "Structural",
                            text: "structural reqs for tier 3 Handholds",
                        },
                        {
                            requirement: "ada",
                            displayName: "American Disability Act",
                            text: "ADA reqs for tier 3 Handholds",
                        },
                        {
                            requirement: "design guidelines",
                            displayName: "Design Guidelines",
                            text: "Design guidelines for tier 3 Handholds",
                        },
                    ]
                },
            ] 
        }
    },
}
export default testData; 