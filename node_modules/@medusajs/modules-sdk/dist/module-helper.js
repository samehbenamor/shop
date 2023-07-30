"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesHelper = void 0;
class ModulesHelper {
    constructor() {
        this.modules_ = {};
    }
    setModules(modules) {
        this.modules_ = modules;
    }
    get modules() {
        return Object.values(this.modules_ || {}).map((value) => ({
            module: value.definition.key,
            resolution: value.resolutionPath,
        }));
    }
}
exports.ModulesHelper = ModulesHelper;
//# sourceMappingURL=module-helper.js.map