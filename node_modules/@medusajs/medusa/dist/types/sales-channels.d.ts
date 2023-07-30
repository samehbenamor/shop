export declare type CreateSalesChannelInput = {
    name: string;
    description?: string;
    is_disabled?: boolean;
};
export declare type UpdateSalesChannelInput = Partial<CreateSalesChannelInput>;
export declare class ProductBatchSalesChannel {
    id: string;
}
