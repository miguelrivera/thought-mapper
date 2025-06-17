/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { identity } from '../models/identity';
import type { node } from '../models/node';
import type { nodeEntity } from '../models/nodeEntity';
import type { nodePartial } from '../models/nodePartial';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NodeService {
    /**
     * List all nodes for a project
     * @param id
     * @returns nodeEntity A collection of valid nodes
     * @throws ApiError
     */
    public static getProjectsNodes(
        id: identity,
    ): CancelablePromise<Array<nodeEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{id}/nodes',
            path: {
                'id': id,
            },
            errors: {
                401: `Problem details as per RFC 7807 for status 401`,
                403: `Problem details as per RFC 7807 for status 403`,
                404: `Problem details as per RFC 7807 for status 404`,
                500: `Problem details as per RFC 7807 for status 500`,
            },
        });
    }
    /**
     * Add a new node to a project
     * @param id
     * @param requestBody Payload to create a node
     * @returns nodeEntity Node found and is valid
     * @throws ApiError
     */
    public static postProjectsNodes(
        id: identity,
        requestBody: node,
    ): CancelablePromise<nodeEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/{id}/nodes',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Problem details as per RFC 7807 for status 400`,
                401: `Problem details as per RFC 7807 for status 401`,
                404: `Problem details as per RFC 7807 for status 404`,
                500: `Problem details as per RFC 7807 for status 500`,
            },
        });
    }
    /**
     * Get node details
     * @param id
     * @returns nodeEntity Node found and is valid
     * @throws ApiError
     */
    public static getNodes(
        id: identity,
    ): CancelablePromise<nodeEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nodes/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Problem details as per RFC 7807 for status 401`,
                403: `Problem details as per RFC 7807 for status 403`,
                404: `Problem details as per RFC 7807 for status 404`,
                500: `Problem details as per RFC 7807 for status 500`,
            },
        });
    }
    /**
     * Update node
     * @param id
     * @param requestBody Payload to update a node
     * @returns nodeEntity Node found and is valid
     * @throws ApiError
     */
    public static patchNodes(
        id: identity,
        requestBody: nodePartial,
    ): CancelablePromise<nodeEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/nodes/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Problem details as per RFC 7807 for status 400`,
                401: `Problem details as per RFC 7807 for status 401`,
                403: `Problem details as per RFC 7807 for status 403`,
                404: `Problem details as per RFC 7807 for status 404`,
                500: `Problem details as per RFC 7807 for status 500`,
            },
        });
    }
    /**
     * Delete node
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteNodes(
        id: identity,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/nodes/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Problem details as per RFC 7807 for status 401`,
                403: `Problem details as per RFC 7807 for status 403`,
                404: `Problem details as per RFC 7807 for status 404`,
                500: `Problem details as per RFC 7807 for status 500`,
            },
        });
    }
}
