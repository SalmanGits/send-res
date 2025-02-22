/**
 * Send response with status and additional data.
 * @param {object} params - Object containing response, status, and additional data.
 * @param {Express.Response} params.res - Express response object.
 * @param {number} params.status - HTTP status code.
 * @param {object} params.data - Additional data to send in the response.
 */
import { Response } from 'express';
export declare function sendResponse<T>(res: Response, status: number, data?: T): void;
