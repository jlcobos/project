export interface IBidRequest {
    name: string;
    requestingOranization: string;
    requestingOranizationContacts: {
            uid: string, 
            bidTeamRole: string
        }[]; // needs to be user reference
    biddingOrganizations: {
            organizationId: string, 
            contacts: {
                uid: string
            }[]
        };
    bidActive: boolean;
    bidRequestSuccessful: boolean;
    // messages: string
}

class BidRequest implements IBidRequest {
    name: string;
    requestingOranization: string;
    requestingOranizationContacts: {
            uid: string, 
            bidTeamRole: string
        }[]; // needs to be user reference
    biddingOrganizations: {
            organizationId: string, 
            contacts: {
                uid: string // TODO: needs to be by reference in firebase
            }[]
        };
    bidActive: boolean;
    bidRequestSuccessful: boolean;

    constructor(formData: IBidRequest){

    }


}