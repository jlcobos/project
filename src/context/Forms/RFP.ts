// import { IBidRequest } from "../Models/BidRequests";
// TODO: add searchable interface

export function initializeRFP(data: any): IRFP {

    // const suppliers = data.suppliers.map((s: any) => ({id: s.id}))

    return {
        bidName: "test",
        RequestMessage: "this is a request for proposal",
        buyer: data.organizationId,
        bidders: data.suppliers.map((s: string) => ({
            organizationId: s,
            contacts: [],
        })),
        bidActive: true,
        bidAwardedTo: null,
        messages: null, // TODO: messages interface
        createdBy: data.userId,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        dateClosed: null,
    }

}
interface IRFP {
    bidName: string;
    RequestMessage: string;
    buyer: string; // TODO: needs to be an organization reference
    bidders: {
            organizationId: string, 
            contacts: string[],
        };
    bidActive: boolean;
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
    dateCreated: Date;
    dateUpdated: Date;
    dateClosed: Date | null;
}