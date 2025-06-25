/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { content } from './content';
import type { longString } from './longString';
import type { shortString } from './shortString';
/**
 * General representation of a project's properties to be updated, the `root` property is not optional
 */
export type projectPartial = {
    name?: shortString;
    root: content;
    title?: longString;
};

