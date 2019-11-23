// import { IBidRequest } from "../Models/BidRequests";
// TODO: add searchable interface

export function initializeRFP(data: any): IRFP {

    // const suppliers = data.suppliers.map((s: any) => ({id: s.id}))

    return {
        bidName: "test",
        RequestMessage: "this is a request for proposal",
        contacts: data,
        bidders: {
            organizationUid: "",
            contacts: [{uid: ""}],
        },
        bidActive: true,
        bidAwardedTo: null,
        messages: null, // TODO: messages interface
        dateCreated: new Date(),
        dateUpdated: new Date(),
        dateClosed: null,
    }

}
interface IRFP {
    bidName: string;
    RequestMessage: string;
    contacts: { uid: string }[]; // needs to be user reference
    bidders: {
            organizationUid: string, 
            contacts: {
                uid: string // TODO: needs to be by reference in firebase
            }[]
        };
    bidActive: boolean;
    bidAwardedTo?: {orgId: string}[] | null; // TODO: needs to be a reference uid
    messages?: {
        organizationUid: string;
            contactUid: string;
            subject: string;
            messageUid: string;
            link?: string;
            dateSent: Date;
        }[] | null;
    dateCreated: Date;
    dateUpdated: Date;
    dateClosed: Date | null;
}