import { ModuleResolution, ModulesResponse } from "@medusajs/types";
export declare class ModulesHelper {
    private modules_;
    setModules(modules: Record<string, ModuleResolution>): void;
    get modules(): ModulesResponse;
}
