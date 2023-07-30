export function getInternalModules(configModule: any): {
    moduleDeclaration: import("@medusajs/modules-sdk").InternalModuleDeclaration | import("@medusajs/modules-sdk").ExternalModuleDeclaration | undefined;
    loadedModule: any;
}[];
declare function _default(directory: any, featureFlagRouter: any): {
    coreMigrations: any;
};
export default _default;
export function getEnabledMigrations(migrationDirs: any, isFlagEnabled: any): any;
export function getModuleMigrations(configModule: any, isFlagEnabled: any): {
    moduleDeclaration: import("@medusajs/modules-sdk").InternalModuleDeclaration | import("@medusajs/modules-sdk").ExternalModuleDeclaration | undefined;
    models: any;
    migrations: any;
}[];
export function getModuleSharedResources(configModule: any, featureFlagsRouter: any): {
    models: any[];
    migrations: any[];
};
export function runIsolatedModulesMigration(configModule: any): Promise<void>;
export function revertIsolatedModulesMigration(configModule: any): Promise<void>;
