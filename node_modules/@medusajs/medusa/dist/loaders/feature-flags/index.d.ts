import { Logger } from "../../types/global";
import { FlagRouter } from "../../utils/flag-router";
export declare const featureFlagRouter: FlagRouter;
declare const _default: (configModule?: {
    featureFlags?: Record<string, string | boolean>;
}, logger?: Logger, flagDirectory?: string) => FlagRouter;
export default _default;
