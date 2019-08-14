"use strict";
exports.__esModule = true;
var APTA_BaseURL = "https://www.apta.com";
var CFR_BaseURL = "https://www.ecfr.gov";
// TODO: specify first char of url to be "/": could just write a test for whole url... check out new URL(url[,base])
var links = {
    GlazingCFR: {
        url: CFR_BaseURL + "/cgi-bin/retrieveECFR?gp=&SID=c4bd7d71907e70fdd72f2235963ec7a6&mc=true&n=pt49.4.223&r=PART&ty=HTML#ap49.4.223_117.a",
        displayName: "Glazing CFR"
    },
    Seats_FST_cfr238_103AppendixB: {
        url: CFR_BaseURL + "/cgi-bin/retrieveECFR?gp=&SID=2ef853b3d91aaa868fd32779e538f4a1&mc=true&n=pt49.4.238&r=PART&ty=HTML#ap49.4.238_1603.b",
        displayName: "Seats FST CFR238 Appendix B"
    },
    Seats_CalTB133: {
        url: "http://www.bearhfti.ca.gov/industry/tb133.pdf",
        displayName: "Seats Cal TB 133"
    },
    Seats_strength_238_233a: {
        url: CFR_BaseURL + "/cgi-bin/text-idx?SID=fd8c8579ed8590671f4da10d75b7f8b9&mc=true&node=se49.4.238_1233&rgn=div8",
        displayName: "Seats Strength 238 233a"
    },
    Seats_APTA: {
        url: APTA_BaseURL + "/resources/standards/Documents/APTA-PR-CS-S-016-99.pdf",
        displayName: "Seats APTA"
    },
    Seats_designguidelines: {
        url: "http://downloads.transportation.org/NextGenEquipmentComm/C21/Caltrans%20C21%20Specification/Specification%209-101%20Seats.rev%20D.1.pdf",
        displayName: "Seat Design Guidelines"
    },
    APTA_Interior_fittings: {
        url: APTA_BaseURL + "/resources/standards/Documents/APTA-PR-CS-S-006-98.pdf",
        displayName: "APTA Interior Fittings"
    },
    ADA_interior_circulation_StanchionsHandrails: {
        url: APTA_BaseURL + "/resources/standards/Documents/APTA-PR-CS-S-006-98.pdf",
        displayName: "ADA Interior Circulation Stanchions and Handrails"
    },
    APTA_LLEPM_websitelnk: {
        url: APTA_BaseURL + "/resources/standards/Documents/APTA-PR-E-S-013-99.pdf",
        displayName: "APTA LLEPM Website Link"
    },
    LLEPM_CFR238115_websitelnk: {
        url: CFR_BaseURL + "/cgi-bin/text-idx?SID=4bb7993199b6952b8d7ac5194445e111&mc=true&node=se49.4.238_1115&rgn=div8",
        displayName: "LLEPM CFR238115"
    },
    APTA_wire_009_98_websitelnk: {
        url: APTA_BaseURL + "/resources/standards/Documents/APTA-PR-E-RP-009-98.pdf",
        displayName: ""
    }
};
//export const GlazingCFR = "http://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=c4bd7d71907e70fdd72f2235963ec7a6&mc=true&n=pt49.4.223&r=PART&ty=HTML#ap49.4.223_117.a";
//export const Seats_FST_cfr238_103AppendixB = "http://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=2ef853b3d91aaa868fd32779e538f4a1&mc=true&n=pt49.4.238&r=PART&ty=HTML#ap49.4.238_1603.b";
//export const Seats_CalTB133 = "http://www.bearhfti.ca.gov/industry/tb133.pdf"
//export const Seats_strength_238_233a = "http://www.ecfr.gov/cgi-bin/text-idx?SID=fd8c8579ed8590671f4da10d75b7f8b9&mc=true&node=se49.4.238_1233&rgn=div8***testLink";
//export const Seats_APTA = "http://www.apta.com/resources/standards/Documents/APTA-PR-CS-S-016-99.pdf";
//export const Seats_designguidelines = "http://downloads.transportation.org/NextGenEquipmentComm/C21/Caltrans%20C21%20Specification/Specification%209-101%20Seats.rev%20D.1.pdf";
// export const APTA_Interior_fittings = "http://www.apta.com/resources/standards/Documents/APTA-PR-CS-S-006-98.pdf";
// export const ADA_interior_circulation_StanchionsHandrails = "http://www.apta.com/resources/standards/Documents/APTA-PR-CS-S-006-98.pdf";
// export const APTA_LLEPM_websitelnk = "http://www.apta.com/resources/standards/Documents/APTA-PR-E-S-013-99.pdf";
// export const LLEPM_CFR238115_websitelnk = "http://www.ecfr.gov/cgi-bin/text-idx?SID=4bb7993199b6952b8d7ac5194445e111&mc=true&node=se49.4.238_1115&rgn=div8";
exports.APTA_wire_009_98_websitelnk = "http://www.apta.com/resources/standards/Documents/APTA-PR-E-RP-009-98.pdf";
exports.APTA_wiring_002_98_websitelnk = "http://www.apta.com/resources/standards/Documents/APTA-PR-E-RP-002-98.pdf";
exports.PRIIAAMTRAK_305_003_wireNCable_websitelnk = "http://www.highspeed-rail.org/Documents/PRIIA%20305%20DocSpec%20and%20other%20NGEC%20Documents/PRIIA%20Single%20Level%20Spec%20305%20003%20Approved%20Initial%20Release.pdf";
exports.ADA2010Standards = "https://www.ada.gov/regs2010/2010ADAStandards/2010ADAStandards_prt.pdf";
exports.NFPA130 = "http://hamyarenergy.com/static/fckimages/files/NFPA/Hamyar%20Energy%20NFPA%20130%20-%202007.pdf";
exports.CFR_223_appxA = "http://www.ecfr.gov/cgi-bin/text-idx?SID=3cd317da8cff8989cb773c31ec93961d&mc=true&node=pt49.4.223&rgn=div5#ap49.4.223_117.a";
exports.CFR_223 = "http://www.ecfr.gov/cgi-bin/text-idx?SID=3cd317da8cff8989cb773c31ec93961d&mc=true&node=pt49.4.223&rgn=div5#ap49.4.223_117.a";
exports.EmergencyExit_windows_Figure1 = "http://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=7e3d57ee30f1e620414221a1465c1255&mc=true&n=sp49.4.238.b&r=SUBPART&ty=HTML#ap49.4.238_1137.1";
exports.Emergencyaccess_windows_Figure1A = "http://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=f41884206d216c4454a29ff7ac521e33&mc=true&n=sp49.4.238.b&r=SUBPART&ty=HTML#ap49.4.238_1137.2";
exports.Emergencyaccess_exit_windows_Figure1B = "http://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=f41884206d216c4454a29ff7ac521e33&mc=true&n=sp49.4.238.b&r=SUBPART&ty=HTML#ap49.4.238_1137.3";
exports.Emergencyaccess_exit_windows_Figure1C = "http://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=f41884206d216c4454a29ff7ac521e33&mc=true&n=sp49.4.238.b&r=SUBPART&ty=HTML#ap49.4.238_1137.4";
exports.CFR_49_238_113 = "http://www.ecfr.gov/cgi-bin/text-idx?SID=10c4c97aff11ad16cf9a0fff6759a16c&mc=true&node=se49.4.238_1113&rgn=div8";
exports.CFR_49_238_114 = "http://www.ecfr.gov/cgi-bin/text-idx?SID=10c4c97aff11ad16cf9a0fff6759a16c&mc=true&node=se49.4.238_1114&rgn=div8";
exports.APTA_egress_access_signage = "http://www.apta.com/resources/standards/Documents/APTA-PR-PS-S-002-98.pdf";
// Supplier website links // 
exports.KSU_websitelnk = "http://www.kustomseating.com/";
exports.freedman_websitelnk = "http://freedmanseating.com/";
exports.Compin_websitelnk = "http://www.compin.com/?lang=en";
exports.Kiel_websitelnk = "http://www.kielna.com/";
exports.Adtrans_websitelnk = "http://www.adtrans-seating.com/Seating_Systems.htm";
