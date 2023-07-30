import { Router } from "express";
import { AnalyticsConfig } from "../../../..";
import { DeleteResponse } from "../../../../types/common";
declare const _default: (app: Router) => Router;
export default _default;
export declare type AdminAnalyticsConfigRes = {
    analytics_config: AnalyticsConfig;
};
export declare type AdminAnalyticsConfigDeleteRes = DeleteResponse;
export * from "./create-analytics-config";
export * from "./update-analytics-config";
