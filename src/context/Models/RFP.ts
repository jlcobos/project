import { RFPStatus } from "./Enums";

export interface IRFP {
    rfpTitle: string;
    requestMessage: string;
    buyer: string; // TODO: needs to be an organization reference
    bidders: {
            organizationId: string, 
            contacts: string[],
        };
    status: RFPStatus;
    bidAwardedTo?: {orgId: string}[] | null; // TODO: needs to be a reference uid
    messages?: {
        organizationId: string;
            uid: string;
            subject: string;
            messageUid: string;
            link?: string;
            dateSent: Date;
        }[] | null;
    createdBy: string, // TODO: by reference
    proposalDueBy: Date | null;
    cbcRequired: boolean;
    dateCreated: Date;
    dateUpdated: Date;
    dateClosed: Date | null;
}