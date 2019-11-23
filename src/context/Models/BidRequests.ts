export interface IBidRequest {
    bidName: string;
    RequestMessage: string;
    contacts: { uid: string }; // needs to be user reference
    bidders: {
            organizationUid: string, 
            contacts: {
                uid: string // TODO: needs to be by reference in firebase
            }[]
        };
    bidActive: boolean;
    bidAwarded?: {orgId: string}[]; // TODO: needs to be a reference uid
    messages?: {
        organizationUid: string;
            contactUid: string;
            subject: string;
            messageUid: string;
            link?: string;
            dateSent: Date;
        }[];
    dateCreated: Date;
    dateUpdated: Date;
    dateClosed: Date | null;
}