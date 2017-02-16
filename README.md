## ww-simple-file-upload

Sample code for uploading a file to Watson Workspace using the simple file upload API.

API documentation: https://developer.watsonwork.ibm.com/docs

### Usage

1.  Clone this repository.
1.  Install dependencies: `npm install`
1.  Export required environment variables:
    - `JWT` - a Watson Work access token
    - `SPACE_ID` - the target space ID
    - `FILE_PATH` - the path to the file to upload
1.  Run the script: `node index.js`

The script will upload the file, which in turn will share the file with the given space.
