import { ConfigModule, MedusaContainer } from "../types/global";
declare type Options = {
    container: MedusaContainer;
    configModule: ConfigModule;
    isTest?: boolean;
};
/**
 * Registers all services in the services directory
 */
declare const _default: ({ container, configModule, isTest }: Options) => void;
export default _default;
