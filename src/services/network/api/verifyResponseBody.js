// TODO: add in json verification handlers
const verifyResponseBody = (responseBody, omitHeaderCheck = false) => {
    // API sometimes ONLY returnst status:200, with empty body
    // eg: MVC Ok() method
    const isValidJson = !omitHeaderCheck
        ? responseBody?.headers.get('content-type')?.includes('application/json')
        : false;
    const isStatusValid = responseBody?.status === 200;
    const isErrorResponse = !responseBody?.ok;
    const isSuccessResponse = responseBody?.ok;

    return {
        isStatusValid,
        isValidJson,
        isSuccessResponse,
        isErrorResponse
    };
};

export default verifyResponseBody;