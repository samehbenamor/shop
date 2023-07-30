import { LineItem, LineItemTaxLine, ShippingMethodTaxLine } from "../models";
import { ITaxCalculationStrategy, TaxCalculationContext } from "../interfaces";
import { FlagRouter } from "../utils/flag-router";
declare class TaxCalculationStrategy implements ITaxCalculationStrategy {
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ featureFlagRouter }: {
        featureFlagRouter: any;
    });
    calculate(items: LineItem[], taxLines: (ShippingMethodTaxLine | LineItemTaxLine)[], calculationContext: TaxCalculationContext): Promise<number>;
    private calculateLineItemsTax;
    private calculateShippingMethodsTax;
}
export default TaxCalculationStrategy;
