import { NextFunction, Request, Response } from "express";
import { MedusaError } from "medusa-core-utils";
declare const _default: () => (err: MedusaError, req: Request, res: Response, next: NextFunction) => void;
export default _default;
/**
 * @schema Error
 * title: "Response Error"
 * type: object
 * properties:
 *  code:
 *    type: string
 *    description: A slug code to indicate the type of the error.
 *  message:
 *    type: string
 *    description: Description of the error that occurred.
 *  type:
 *    type: string
 *    description: A slug indicating the type of the error.
 */
