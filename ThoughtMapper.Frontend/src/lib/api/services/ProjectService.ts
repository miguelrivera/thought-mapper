/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { identity } from '../models/identity';
import type { project } from '../models/project';
import type { projectEntity } from '../models/projectEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectService {
    /**
     * List projects for the authenticated user
     * @returns projectEntity A successfull response when calling the GET endpoint for the projects resource
     * @throws ApiError
     */
    public static getProjects(): CancelablePromise<Array<projectEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects',
            errors: {
                401: `Problem details as per RFC 7807 for status 401`,
                403: `Problem details as per RFC 7807 for status 403`,
                500: `Problem details as per RFC 7807 for status 500`,
            },
        });
    }
    /**
     * Create a new project
     * @param requestBody Payload to create a project
     * @returns projectEntity Project was created successfully
     * @throws ApiError
     */
    public static postProjects(
        requestBody: project,
    ): CancelablePromise<projectEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Problem details as per RFC 7807 for status 400`,
                401: `Problem details as per RFC 7807 for status 401`,
                403: `Problem details as per RFC 7807 for status 403`,
                500: `Problem details as per RFC 7807 for status 500`,
            },
        });
    }
    /**
     * Get a single project by ID
     * @param id
     * @returns projectEntity Project found and is valid
     * @throws ApiError
     */
    public static getProjects1(
        id: identity,
    ): CancelablePromise<projectEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{id}',
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
     * Update project
     * @param id
     * @param requestBody Payload to create a project
     * @returns projectEntity Project was created successfully
     * @throws ApiError
     */
    public static patchProjects(
        id: identity,
        requestBody: project,
    ): CancelablePromise<projectEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/projects/{id}',
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
     * Delete project
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteProjects(
        id: identity,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/projects/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Problem details as per RFC 7807 for status 401`,
                403: `Problem details as per RFC 7807 for status 403`,
                404: `Problem details as per RFC 7807 for status 404`,
            },
        });
    }
}
