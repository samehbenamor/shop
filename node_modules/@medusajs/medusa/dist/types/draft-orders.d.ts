import { AddressPayload } from "./common";
export declare type DraftOrderListSelector = {
    q?: string;
};
export declare type DraftOrderCreateProps = {
    status?: string;
    email: string;
    billing_address_id?: string;
    billing_address?: Partial<AddressPayload>;
    shipping_address_id?: string;
    shipping_address?: Partial<AddressPayload>;
    items?: Item[];
    region_id: string;
    discounts?: Discount[];
    customer_id?: string;
    no_notification_order?: boolean;
    shipping_methods: ShippingMethod[];
    metadata?: Record<string, unknown>;
    idempotency_key?: string;
};
declare type ShippingMethod = {
    option_id: string;
    data?: Record<string, unknown>;
    price?: number;
};
declare type Discount = {
    code: string;
};
declare type Item = {
    title?: string;
    unit_price?: number;
    variant_id?: string;
    quantity: number;
    metadata?: Record<string, unknown>;
};
export {};
