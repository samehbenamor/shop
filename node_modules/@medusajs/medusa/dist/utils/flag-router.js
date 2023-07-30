"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlagRouter = void 0;
var FlagRouter = /** @class */ (function () {
    function FlagRouter(flags) {
        this.flags = {};
        this.flags = flags;
    }
    FlagRouter.prototype.isFeatureEnabled = function (key) {
        return !!this.flags[key];
    };
    FlagRouter.prototype.setFlag = function (key, value) {
        if (value === void 0) { value = true; }
        this.flags[key] = value;
    };
    FlagRouter.prototype.listFlags = function () {
        return Object.entries(this.flags || {}).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return ({
                key: key,
                value: value,
            });
        });
    };
    return FlagRouter;
}());
exports.FlagRouter = FlagRouter;
//# sourceMappingURL=flag-router.js.map