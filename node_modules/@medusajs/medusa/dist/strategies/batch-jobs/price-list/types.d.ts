import { EntityManager } from "typeorm";
import { FileService } from "medusa-interfaces";
import { BatchJobService, PriceListService, ProductVariantService, RegionService } from "../../../services";
import { CsvSchema } from "../../../interfaces/csv-parser";
import { BatchJob } from "../../../models";
export declare type PriceListImportBatchJob = BatchJob & {
    context: PriceListImportJobContext;
    result: Pick<BatchJob, "result"> & {
        operations: {
            [K in keyof typeof OperationType]: number;
        };
    };
};
/**
 * DI props for the Product import strategy
 */
export declare type InjectedProps = {
    priceListService: PriceListService;
    batchJobService: BatchJobService;
    productVariantService: ProductVariantService;
    regionService: RegionService;
    fileService: typeof FileService;
    manager: EntityManager;
};
/**
 * Data shape returned by the CSVParser.
 */
export declare type TParsedPriceListImportRowData = Record<string, string | number | (string | number | object)[]>;
export declare type PriceListImportOperationPrice = {
    region_id?: string;
    currency_code: string;
    amount: number;
};
export declare type PriceListImportOperation = {
    variant_id: string;
    prices: PriceListImportOperationPrice[];
};
export declare type ParsedPriceListImportPrice = {
    amount: number;
    currency_code: string;
} | {
    amount: number;
    region_name: string;
};
/**
 * CSV parser's row reducer result data shape.
 */
export declare type TBuiltPriceListImportLine = Record<string, any>;
/**
 * Schema definition of for an import CSV file.
 */
export declare type PriceListImportCsvSchema = CsvSchema<TParsedPriceListImportRowData, TBuiltPriceListImportLine>;
/**
 * Import Batch job context column type.
 */
export declare type PriceListImportJobContext = {
    price_list_id: string;
    fileKey: string;
};
/**
 * Supported batch job import ops.
 */
export declare enum OperationType {
    PricesCreate = "PRICE_LIST_PRICE_CREATE"
}
