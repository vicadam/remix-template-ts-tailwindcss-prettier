export type WithChildren<T = unknown> = T & { children?: React.ReactNode };
export type WithChildrenPropType = { children?: React.ReactNode };

export type GenericObjectType = Record<string, unknown>;
export type StringObjectType = Record<string, string>;
