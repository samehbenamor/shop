import { AwilixContainer } from "awilix";
export declare type MedusaContainer = AwilixContainer & {
    registerAdd: <T>(name: string, registration: T) => MedusaContainer;
    createScope: () => MedusaContainer;
};
