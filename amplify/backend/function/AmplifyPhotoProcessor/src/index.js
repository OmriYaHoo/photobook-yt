/* Amplify Params - DO NOT EDIT
	API_AMPLIFYPHOTOSAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYPHOTOSAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
