/**
 * Send response with status and additional data.
 * @param {object} obj - Object containing response, status, and additional data.
 * @param {object} obj.res - Express response object.
 * @param {number} obj.status - HTTP status code.
 * @param {object} obj.data - Additional data to send in the response.
 */

function sendResponse(obj) {
    const { res, status, data } = obj;

    if (!res || !status) {
        throw new Error("Response object and status are required");
    }
    if (typeof data !== 'object' ||
        Array.isArray(data) || data == null) {
        throw new TypeError("Data must be an object");
    }
    try {
        if (data) {
            return res.status(status).json(data);
        } else {
            return res.sendStatus(status);
        }
    } catch (error) {
        return res.sendStatus(500);
    }
}

module.exports = {
    sendResponse
}