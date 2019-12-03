import { RFPStatus } from "./Enums";

export interface IRFP {
    rfpTitle: string;
    requestMessage: string;
    buyer: string; // TODO: needs to be an organization reference
    bidders: string[];
    status: RFPStatus;
    bidAwardedTo?: {orgId: string}[] | null; // TODO: needs to be a reference uid
    messages: IMessage[] | [];
    createdBy: string, // TODO: by reference
    proposalDueBy: Date | null;
    cbcRequired: boolean;
    dateCreated: Date;
    dateUpdated: Date;
    dateClosed: Date | null;
}

export interface IMessage {
    // rfpId: string;
    sendingOrganizationId: string;
    senderUID: string;
    receivingOrganizationId: string;
    subject: string;
    message: string;
    dateSent: any;
}