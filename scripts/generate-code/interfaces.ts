/**
 * Interface for representing metadata about a service.
 * @interface
 * @property {string} name - The name of the service.
 * @property {string} exportAlias - The alias used when exporting the service.
 */
export interface ServiceMeta {
    name: string;
    exportAlias: string;
}

/**
 * Interface for representing metadata about a project.
 * @interface
 * @property {string} name - The name of the project.
 * @property {ServiceMeta[]} services - An array of ServiceMeta objects representing the services in the project.
 */
export interface ProjectMeta {
    name: string;
    services: ServiceMeta[];
}
