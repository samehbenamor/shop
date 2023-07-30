import { Express } from "express";
import "reflect-metadata";
import { Connection } from "typeorm";
import { MedusaContainer } from "../types/global";
declare type Options = {
    directory: string;
    expressApp: Express;
    isTest: boolean;
};
declare const _default: ({ directory: rootDirectory, expressApp, isTest, }: Options) => Promise<{
    container: MedusaContainer;
    dbConnection: Connection;
    app: Express;
}>;
export default _default;
