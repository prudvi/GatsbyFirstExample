
let cu = "Company Update";
let bm = "Board Meeting";
let ru = "Result";
let ca = "Corp Action";
let agm = "AGM/EGM";
let sast = "Insider Trading / SAST";
let nl = "New Listing";
let ar = "Annual Report";
export const categories = [
    cu,
    bm,
    ru,
    ca,
    agm,
    sast,
    nl,
    ar
];

const companyUpdateFilters = ["All", "Board Meeting Intimation", "Earnings Call Transcript", "Investor Presentation", "Press Release / Media Release", "Acquisition",
    "Allotment of ESOP / ESPS", "Investor Meet - Intimation", "Credit Rating", "Corporate Insolvency Resolution",
    "Exercise of stock options",
    "Change of Company Name", "Meeting Updates", "Scheme of Arrangement", "Appointment Of", "Resignation of",
    "Annual Secretarial Compliance", "Award", "LOA", "Postal Ballot", "Change in Directorate", "Subsidiary",
    "Updates on Open Offer", "Related Party Transactions", "Preferential Issue", "Others"];

const boardMeetingFilters = ["All", "Board Meeting Intimation", "Board Meeting Outcome", "Others"];
const agmFilters = ["All", "Annual General Meeting", "Postal Ballot-Outcome", 
"Voting Results", "Shareholder Meeting", "Scrutinizers Report", "Postal Ballot",
"Extra Ordinary General Meeting", "Remote E-voting", "Others"];

const corpActionFilters = ["All", "Record Date", "E-Voting", "Book Closure", "Dividend", "Bonus",
 "Stock Split", "Sub division", "Others"];

const resultFilters = ["All", "Audited Financial Results", "Standalone And Consolidated",
 "Revised", "Outcome", "Related Party Transactions", "Unaudited", "Annual Results", "Results-Delay",
"Financial Results", "Result For The Quarter", "Others"];

const sastFilters = ["All", "Reg. 29(1)", "Reg. 29(2)", "Reg. 31(1) and 31(2)", "Others"];

const nlFilters = ["All", nl, "Others"];
const arFilters = ["All", "Annual Report", "Others"];

export const filterSubList = (filterName: string) => {
    if (filterName == cu) {
        return companyUpdateFilters;
    }
    if (filterName == bm) {
        return boardMeetingFilters;
    }
    if (filterName == ru) {
        return resultFilters;
    }
    if (filterName == ca) {
        return corpActionFilters;
    }
    if (filterName == agm) {
        return agmFilters;
    }
    if (filterName == sast) {
        return sastFilters;
    }
    if (filterName == nl) {
       return nlFilters;
    }
    if (filterName == ar) {
        return arFilters;
    }
}