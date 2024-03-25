const _ = require('lodash');

const data=[
    {
        "id": 47,
        "offerfeeid": "offerfee1",
        "name": "CompTIA CertMaster Learn Bundle",
        "description": "CompTIA's self-paced lessons.Browser-based CompTIA Lab. Practice Questions & Videos.Aligned with CompTIA exam",
        "marketPrice": "$472.0",
        "offerPrice": "$236.0",
        "isDefault": null,
        "isDownloadSent": false,
        "trainingBatches": [
            {
                "batchId": 101,
                "startDate": "2024-04-01",
                "endDate": "2024-05-01",
                "location": "Online"
            },
            {
                "batchId": 102,
                "startDate": "2024-04-15",
                "endDate": "2024-05-15",
                "location": "In-Person"
            }
        ]
    },
    {
        "id": 48,
        "offerfeeid": "offerfee2",
        "name": "MOST POPULARCompTIA Exam Bundle",
        "description": "CompTIA Exam Voucher. CertMaster Practice questions.Track learning progress.Aligned with CompTIA exam",
        "marketPrice": "$472.0",
        "offerPrice": "$302.0",
        "isDefault": null,
        "isDownloadSent": true,
        "trainingBatches": [
            {
                "batchId": 103,
                "startDate": "2024-04-10",
                "endDate": "2024-05-10",
                "location": "Online"
            }
        ]
    },
    {
        "id": 107,
        "offerfeeid": "offerfee3",
        "name": "Exam Voucher",
        "description": "CompTIA A+ Core-1 exam voucher. One CompTIA exam attempt",
        "marketPrice": "$396.0",
        "offerPrice": "$198.0",
        "isDefault": null,
        "trainingBatches": [],
        "isDownloadSent": false,
    },
    {
        "id": 124,
        "offerfeeid": "offerfee4",
        "name": "eBook",
        "description": "Self-Paced Study Guide.Designed by CompTIA .Review questions at the end of lessons.",
        "marketPrice": "$64.0",
        "offerPrice": "$32.0",
        "isDefault": null,
        "trainingBatches": [],
        "isDownloadSent": true,
    },
    {
        "id": 141,
        "offerfeeid": "offerfee5",
        "name": "CompTIA A+ Exam Objectives",
        "description": "Detailed Syllabus</i>CompTIA A+ Acronym List CompTIA A+ Test Details",
        "marketPrice": "$25.0",
        "offerPrice": "$0.0",
        "isDefault": false,
        "trainingBatches": [],
        "isDownloadSent": true,
    }]    
const findCandidatesAppliedForFreeDownloads = () => {
    return _.find(data, { 'offerPrice': '$32.0' });
};

// Function to count the number of candidates for whom download was sent successfully
const countSuccessfulDownloadCandidates = () => {
    const counts = _.countBy(data, (item) => {
        return item.offerPrice === '$32.0' && item.isDownloadSent === true ? 'sent' : 'notSent';
    });
    return counts.sent || 0;
};

// Example usage
console.log("Candidates who applied for free downloads:");
console.log(findCandidatesAppliedForFreeDownloads());

console.log("Number of candidates for whom download was sent successfully:");
console.log(countSuccessfulDownloadCandidates());
