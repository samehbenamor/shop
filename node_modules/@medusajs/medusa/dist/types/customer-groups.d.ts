import { DateComparisonOperator, StringComparisonOperator } from "./common";
export declare class FilterableCustomerGroupProps {
    id?: string | string[] | StringComparisonOperator;
    q?: string;
    name?: string[];
    updated_at?: DateComparisonOperator;
    created_at?: DateComparisonOperator;
    discount_condition_id?: string;
}
export declare class CustomerGroupsBatchCustomer {
    id: string;
}
export declare class CustomerGroupUpdate {
    name?: string;
    metadata?: Record<string, unknown>;
}
