/**
 * Send response with status and additional data.
 * @param {object} params - Object containing response, status, and additional data.
 * @param {Express.Response} params.res - Express response object.
 * @param {number} params.status - HTTP status code.
 * @param {object} params.data - Additional data to send in the response.
 */

import { Response } from 'express';

export function sendResponse<T>(res: Response, status: number, data?: T): void {
    if (!res || !status) {
        throw new Error("Response object and status are required");
    }

    try {
        if (data !== undefined) {
            res.status(status).json(data);
        } else {
            res.sendStatus(status);
        }
    } catch (error) {
        res.sendStatus(500);
    }
}

