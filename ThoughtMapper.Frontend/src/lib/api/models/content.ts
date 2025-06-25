/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dataString } from './dataString';
/**
 * Object representing an entry, or the contents of a `node`. The `data` property is always a Base64 encoded string,
 * but will be deserialized differently depedending on the `type` and `typeDiscriminator` (if present).
 * Please note that this object is subject to change.
 */
export type content = {
    type: content.type;
    typeDiscriminator?: content.typeDiscriminator | null;
    data: dataString;
};
export namespace content {
    export enum type {
        FILE = 'file',
        PICTURE = 'picture',
        TEXT_UTF_8 = 'text-utf-8',
        TEXT_ASCII = 'text-ascii',
        TEXT_ISO_88591 = 'text-iso-88591',
    }
    export enum typeDiscriminator {
        BINARY = 'binary',
        DOCX = 'docx',
        DOC = 'doc',
        PDF = 'pdf',
        NONE = 'none',
    }
}

