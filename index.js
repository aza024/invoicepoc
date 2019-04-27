async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    
    const [result] = await client.textDetection('.//invoice-template-us-classic-white-750px.png');
    const detections = result.textAnnotations;
    console.log('Text:');
    // console.log(detections[0].description)
    detections.forEach(text => console.log(text));
}

// quickstart().catch(console.error);
const text = 'INVOICE\nEast Repair Inc.\n1912 Harvest Lane\nNew York, NY 12210\nBill To\nJohn Smith\n2 Court Square\nNew York, NY 12210\nInvoice #\nInvoice Date\nР.О.#\nDue Date\nUS-001\n11/02/2019\n2312/2019\n26/02/2019\nShip To\nJohn Smith\n3787 Pineview Drive\nCambridge, MA 12210\nUNIT PRICE\nQTY\nDESCRIPTION\nAMOUNT\nFront and rear brake cables\nNew set of pedal arms\nLabor 3hrs\n100.00\n15.00\n5.00\nSubtotal\nSales Tax 6.25%\nTOTAL\n100.00\n30.00\n15.00\n145.00\n9.06\n$154.06\nTerms & Conditions\nPayment is due within 15 day:s\nPlease make checks payable to: East Repair Inc.\n'

function billsTo(input) {
    const start = input.indexOf("Bill To")
    const end = input.indexOf("Invoice #")

    console.log(input.substr(start + "Bill To".length + 1, end-start-"Invoice #".length))
}


function shipsTo(input) {
    const start = input.indexOf("Ship To")
    const end = input.indexOf("UNIT PRICE")

    console.log(input.substr(start + "Ship To".length + 1, end-start-"UNIT PRICE".length))
}

console.log("Bills to")
billsTo(text)
console.log("")

console.log("Ships to")
shipsTo(text)

// [
//     {
//         "qty": 1,
//         "description": "Front and rear breaks",
//         "unit_price" : 100.00,
//         "amount": 100.00
//     }
// ]