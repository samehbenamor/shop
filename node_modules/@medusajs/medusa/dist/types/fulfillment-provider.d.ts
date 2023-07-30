import { Return } from "../models";
export declare type FulfillmentOptions = {
    provider_id: string;
    options: Record<string, unknown>[];
};
export declare type CreateReturnType = Omit<Return, "beforeInsert">;
