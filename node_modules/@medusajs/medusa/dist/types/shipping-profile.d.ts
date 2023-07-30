import { ShippingProfileType } from "../models";
export declare type CreateShippingProfile = {
    name: string;
    type: ShippingProfileType;
    metadata?: Record<string, unknown>;
};
export declare type UpdateShippingProfile = {
    name?: string;
    metadata?: Record<string, unknown>;
    type?: ShippingProfileType;
    products?: string[];
    shipping_options?: string[];
};
