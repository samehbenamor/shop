import { FeatureFlagsResponse, IFlagRouter } from "../types/feature-flags";
export declare class FlagRouter implements IFlagRouter {
    private readonly flags;
    constructor(flags: Record<string, boolean>);
    isFeatureEnabled(key: string): boolean;
    setFlag(key: string, value?: boolean): void;
    listFlags(): FeatureFlagsResponse;
}
