"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapHandler = void 0;
var wrapHandler = function (fn) {
    return function (req, res, next) {
        var _a;
        if ((_a = req === null || req === void 0 ? void 0 : req.errors) === null || _a === void 0 ? void 0 : _a.length) {
            return res.status(400).json({
                errors: req.errors,
                message: "Provided request body contains errors. Please check the data and retry the request",
            });
        }
        return fn(req, res).catch(next);
    };
};
exports.wrapHandler = wrapHandler;
/**
 * @schema MultipleErrors
 * title: "Multiple Errors"
 * type: object
 * properties:
 *  errors:
 *    type: array
 *    description: Array of errors
 *    items:
 *      $ref: "#/components/schemas/Error"
 *  message:
 *    type: string
 *    default: "Provided request body contains errors. Please check the data and retry the request"
 */
//# sourceMappingURL=wrap-handler.js.map