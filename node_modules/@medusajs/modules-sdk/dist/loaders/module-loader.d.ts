import { Logger, MedusaContainer, ModuleResolution } from "@medusajs/types";
import { ModulesHelper } from "../module-helper";
export declare const moduleHelper: ModulesHelper;
export declare const moduleLoader: ({ container, moduleResolutions, logger, }: {
    container: MedusaContainer;
    moduleResolutions: Record<string, ModuleResolution>;
    logger: Logger;
}) => Promise<void>;
