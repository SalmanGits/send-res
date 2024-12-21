/**
 * Send response with status and additional data.
 * @param {object} params - Object containing response, status, and additional data.
 * @param {Express.Response} params.res - Express response object.
 * @param {number} params.status - HTTP status code.
 * @param {object} params.data - Additional data to send in the response.
 */

import { Response } from 'express';

type SendResponseParams = {
    res: Response;
    status: number;
    data?: Record<string, any>;
};

function sendResponse({ res, status, data }: SendResponseParams): void {
    if (!res || !status) {
        throw new Error("Response object and status are required");
    }
    if (data !== undefined && (typeof data !== 'object' || Array.isArray(data) || data === null)) {
        throw new TypeError("Data must be an object");
    }

    try {
        if (data) {
            res.status(status).json(data);
        } else {
            res.sendStatus(status);
        }
    } catch (error) {
        res.sendStatus(500);
    }
}

export { sendResponse };
