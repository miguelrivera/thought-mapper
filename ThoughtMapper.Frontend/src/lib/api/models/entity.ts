/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dateAndTime } from './dateAndTime';
import type { identity } from './identity';
/**
 * An object with the fields added when it has been persisted
 */
export type entity = {
    created: dateAndTime;
    hasChildren?: boolean;
    id: identity;
    updated: dateAndTime;
};

