export interface BidRequestMessages {
    bidRequestId: string; // needs to be a reference
    message: {
        organizationId: string; 
        uid: string;
        message: string;
        documentReference: string;
        timeStamp: Date;
    }[];

}