import { FindParams } from "./common";
export declare class PriceSelectionParams extends FindParams {
    cart_id?: string;
    region_id?: string;
    currency_code?: string;
}
export declare class AdminPriceSelectionParams extends PriceSelectionParams {
    customer_id?: string;
}
