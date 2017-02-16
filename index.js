var fs = require('fs');
var request = require('request');

var JWT = process.env.JWT;
var SPACE_ID = process.env.SPACE_ID;
var FILE_PATH = process.env.FILE_PATH;

if (!JWT) {
    console.error('Expected JWT in environment variable called "JWT"!');
    process.exit(1);
}

if (!SPACE_ID) {
    console.error('Expected space ID in environment variable called "SPACE_ID"!');
    process.exit(1);
}

if (!FILE_PATH) {
    console.error('Expected file path in environment variable called "FILE_PATH"!');
    process.exit(1);
}

function upload() {
    request.post({
        url: 'https://api.watsonwork.ibm.com/v1/spaces/' + SPACE_ID + '/files',
        headers: {
            Authorization: 'Bearer ' + JWT,
        },
        formData: {
            file: fs.createReadStream(FILE_PATH)
        }
    }, (err, resp, body) => {
        if (err) {
            console.error('Got an error during upload!');
            console.error(err);
        } else {
            console.log('Upload response:', JSON.parse(body));
        }
    });
}

upload();
