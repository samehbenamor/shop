import { Cart, CartType } from "../models/cart";
import { AddressPayload, DateComparisonOperator, StringComparisonOperator } from "./common";
import { Region } from "../models";
export declare function isCart(object: any): object is Cart;
export declare class FilterableCartProps {
    id?: string | string[] | StringComparisonOperator;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
}
export declare type LineItemUpdate = {
    title?: string;
    unit_price?: number;
    quantity?: number;
    metadata?: Record<string, unknown>;
    region_id?: string;
    variant_id?: string;
};
export declare type LineItemValidateData = {
    variant?: {
        product_id: string;
    };
    variant_id: string;
};
declare class GiftCard {
    code: string;
}
declare class Discount {
    code: string;
}
export declare type CartCreateProps = {
    region_id?: string;
    region?: Region;
    email?: string;
    billing_address_id?: string;
    billing_address?: Partial<AddressPayload>;
    shipping_address_id?: string;
    shipping_address?: Partial<AddressPayload>;
    gift_cards?: GiftCard[];
    discounts?: Discount[];
    customer_id?: string;
    type?: CartType;
    context?: object;
    metadata?: Record<string, unknown>;
    sales_channel_id?: string;
    country_code?: string;
};
export declare type CartUpdateProps = {
    region_id?: string;
    country_code?: string;
    email?: string;
    shipping_address_id?: string;
    billing_address_id?: string;
    billing_address?: AddressPayload | string;
    shipping_address?: AddressPayload | string;
    completed_at?: Date;
    payment_authorized_at?: Date | null;
    gift_cards?: GiftCard[];
    discounts?: Discount[];
    customer_id?: string;
    context?: object;
    metadata?: Record<string, unknown>;
    sales_channel_id?: string;
};
export {};
