const fs = require('fs');
for (let i = 0; i < 10; i++) {
    const temp = {
        "name": `Man #00${(i + 1 + "").padStart(2, 0)}`,
        "symbol": "MAN",
        "description": `Collection of 10 men on the blockchain. This is the number ${i + 1}/10.`,
        "image": `${i}.jpg`,
        "attributes": [
            {
                "trait_type": "Number",
                "value": `${i}`
            }
        ],
        "properties": {
            "files": [
                {
                    "uri": `${i}.jpg`,
                    "type": "image/jpeg"
                }
            ]
        }
    }
    const output = JSON.stringify(temp, null, '\t');
    fs.writeFileSync(`./assets/${i}.json`, output);
}

