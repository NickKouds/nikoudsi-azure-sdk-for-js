## API Report File for "@azure/arm-education"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export type ActionType = string;

// @public
export interface Amount {
    currency?: string;
    value?: number;
}

// @public
export type CreatedByType = string;

// @public (undocumented)
export class EducationManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, options?: EducationManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    grants: Grants;
    // (undocumented)
    joinRequests: JoinRequests;
    // (undocumented)
    labs: Labs;
    // (undocumented)
    operations: Operations;
    redeemInvitationCode(parameters: RedeemRequest, options?: RedeemInvitationCodeOptionalParams): Promise<void>;
    // (undocumented)
    studentLabs: StudentLabs;
    // (undocumented)
    students: Students;
}

// @public
export interface EducationManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface ErrorResponse {
    code?: string;
    message?: string;
}

// @public
export interface ErrorResponseBody {
    error?: ErrorResponse;
}

// @public
export interface GrantDetails extends Resource {
    readonly allocatedBudget?: Amount;
    readonly effectiveDate?: Date;
    readonly expirationDate?: Date;
    readonly offerCap?: Amount;
    readonly offerType?: GrantType;
    readonly status?: GrantStatus;
}

// @public
export interface GrantListResponse {
    readonly nextLink?: string;
    readonly value?: GrantDetails[];
}

// @public
export interface Grants {
    get(billingAccountName: string, billingProfileName: string, options?: GrantsGetOptionalParams): Promise<GrantsGetResponse>;
    list(billingAccountName: string, billingProfileName: string, options?: GrantsListOptionalParams): PagedAsyncIterableIterator<GrantDetails>;
    listAll(options?: GrantsListAllOptionalParams): PagedAsyncIterableIterator<GrantDetails>;
}

// @public
export interface GrantsGetOptionalParams extends coreClient.OperationOptions {
    includeAllocatedBudget?: boolean;
}

// @public
export type GrantsGetResponse = GrantDetails;

// @public
export interface GrantsListAllNextOptionalParams extends coreClient.OperationOptions {
    includeAllocatedBudget?: boolean;
}

// @public
export type GrantsListAllNextResponse = GrantListResponse;

// @public
export interface GrantsListAllOptionalParams extends coreClient.OperationOptions {
    includeAllocatedBudget?: boolean;
}

// @public
export type GrantsListAllResponse = GrantListResponse;

// @public
export interface GrantsListNextOptionalParams extends coreClient.OperationOptions {
    includeAllocatedBudget?: boolean;
}

// @public
export type GrantsListNextResponse = GrantListResponse;

// @public
export interface GrantsListOptionalParams extends coreClient.OperationOptions {
    includeAllocatedBudget?: boolean;
}

// @public
export type GrantsListResponse = GrantListResponse;

// @public
export type GrantStatus = string;

// @public
export type GrantType = string;

// @public
export interface InviteCodeGenerateRequest {
    maxStudentCount?: number;
}

// @public
export interface JoinRequestDetails extends Resource {
    email?: string;
    firstName?: string;
    lastName?: string;
    status?: JoinRequestStatus;
}

// @public
export interface JoinRequestList {
    readonly nextLink?: string;
    readonly value?: JoinRequestDetails[];
}

// @public
export interface JoinRequests {
    approve(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, joinRequestName: string, options?: JoinRequestsApproveOptionalParams): Promise<void>;
    deny(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, joinRequestName: string, options?: JoinRequestsDenyOptionalParams): Promise<void>;
    get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, joinRequestName: string, options?: JoinRequestsGetOptionalParams): Promise<JoinRequestsGetResponse>;
    list(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: JoinRequestsListOptionalParams): PagedAsyncIterableIterator<JoinRequestDetails>;
}

// @public
export interface JoinRequestsApproveOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface JoinRequestsDenyOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface JoinRequestsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type JoinRequestsGetResponse = JoinRequestDetails;

// @public
export interface JoinRequestsListNextOptionalParams extends coreClient.OperationOptions {
    includeDenied?: boolean;
}

// @public
export type JoinRequestsListNextResponse = JoinRequestList;

// @public
export interface JoinRequestsListOptionalParams extends coreClient.OperationOptions {
    includeDenied?: boolean;
}

// @public
export type JoinRequestsListResponse = JoinRequestList;

// @public
export type JoinRequestStatus = string;

// @public
export enum KnownActionType {
    Internal = "Internal"
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownGrantStatus {
    Active = "Active",
    Inactive = "Inactive"
}

// @public
export enum KnownGrantType {
    Academic = "Academic",
    Student = "Student"
}

// @public
export enum KnownJoinRequestStatus {
    Denied = "Denied",
    Pending = "Pending"
}

// @public
export enum KnownLabStatus {
    Active = "Active",
    Deleted = "Deleted",
    Pending = "Pending"
}

// @public
export enum KnownOrigin {
    System = "system",
    User = "user",
    UserSystem = "user,system"
}

// @public
export enum KnownStudentLabStatus {
    Active = "Active",
    Deleted = "Deleted",
    Disabled = "Disabled",
    Expired = "Expired",
    Pending = "Pending"
}

// @public
export enum KnownStudentRole {
    Admin = "Admin",
    Student = "Student"
}

// @public
export interface LabDetails extends Resource {
    budgetPerStudent?: Amount;
    currencyPropertiesTotalAllocatedBudgetCurrency?: string;
    currencyPropertiesTotalBudgetCurrency?: string;
    description?: string;
    displayName?: string;
    readonly effectiveDate?: Date;
    expirationDate?: Date;
    readonly invitationCode?: string;
    readonly maxStudentCount?: number;
    readonly status?: LabStatus;
    valuePropertiesTotalAllocatedBudgetValue?: number;
    valuePropertiesTotalBudgetValue?: number;
}

// @public
export interface LabListResult {
    readonly nextLink?: string;
    readonly value?: LabDetails[];
}

// @public
export interface Labs {
    createOrUpdate(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, parameters: LabDetails, options?: LabsCreateOrUpdateOptionalParams): Promise<LabsCreateOrUpdateResponse>;
    delete(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: LabsDeleteOptionalParams): Promise<void>;
    generateInviteCode(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, parameters: InviteCodeGenerateRequest, options?: LabsGenerateInviteCodeOptionalParams): Promise<LabsGenerateInviteCodeResponse>;
    get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: LabsGetOptionalParams): Promise<LabsGetResponse>;
    list(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: LabsListOptionalParams): PagedAsyncIterableIterator<LabDetails>;
    listAll(billingAccountName: string, billingProfileName: string, options?: LabsListAllOptionalParams): PagedAsyncIterableIterator<LabDetails>;
}

// @public
export interface LabsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type LabsCreateOrUpdateResponse = LabDetails;

// @public
export interface LabsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface LabsGenerateInviteCodeOptionalParams extends coreClient.OperationOptions {
    onlyUpdateStudentCountParameter?: boolean;
}

// @public
export type LabsGenerateInviteCodeResponse = LabDetails;

// @public
export interface LabsGetOptionalParams extends coreClient.OperationOptions {
    includeBudget?: boolean;
}

// @public
export type LabsGetResponse = LabDetails;

// @public
export interface LabsListAllNextOptionalParams extends coreClient.OperationOptions {
    includeBudget?: boolean;
    includeDeleted?: boolean;
}

// @public
export type LabsListAllNextResponse = LabListResult;

// @public
export interface LabsListAllOptionalParams extends coreClient.OperationOptions {
    includeBudget?: boolean;
    includeDeleted?: boolean;
}

// @public
export type LabsListAllResponse = LabListResult;

// @public
export interface LabsListNextOptionalParams extends coreClient.OperationOptions {
    includeBudget?: boolean;
}

// @public
export type LabsListNextResponse = LabListResult;

// @public
export interface LabsListOptionalParams extends coreClient.OperationOptions {
    includeBudget?: boolean;
}

// @public
export type LabsListResponse = LabListResult;

// @public
export type LabStatus = string;

// @public
export interface Operation {
    readonly actionType?: ActionType;
    display?: OperationDisplay;
    readonly isDataAction?: boolean;
    readonly name?: string;
    readonly origin?: Origin;
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): Promise<OperationsListResponse>;
}

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type Origin = string;

// @public
export interface RedeemInvitationCodeOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RedeemRequest {
    firstName: string;
    lastName: string;
    redeemCode: string;
}

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface StudentDetails extends Resource {
    budget?: Amount;
    readonly effectiveDate?: Date;
    email?: string;
    expirationDate?: Date;
    firstName?: string;
    lastName?: string;
    role?: StudentRole;
    readonly status?: StudentLabStatus;
    subscriptionAlias?: string;
    readonly subscriptionId?: string;
    subscriptionInviteLastSentDate?: Date;
}

// @public
export interface StudentLabDetails extends Resource {
    readonly budget?: Amount;
    readonly description?: string;
    readonly displayName?: string;
    readonly effectiveDate?: Date;
    readonly expirationDate?: Date;
    readonly labScope?: string;
    readonly role?: StudentRole;
    readonly status?: StudentLabStatus;
    readonly subscriptionId?: string;
}

// @public
export interface StudentLabListResult {
    readonly nextLink?: string;
    readonly value?: StudentLabDetails[];
}

// @public
export interface StudentLabs {
    get(studentLabName: string, options?: StudentLabsGetOptionalParams): Promise<StudentLabsGetResponse>;
    listAll(options?: StudentLabsListAllOptionalParams): PagedAsyncIterableIterator<StudentLabDetails>;
}

// @public
export interface StudentLabsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type StudentLabsGetResponse = StudentLabDetails;

// @public
export interface StudentLabsListAllNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type StudentLabsListAllNextResponse = StudentLabListResult;

// @public
export interface StudentLabsListAllOptionalParams extends coreClient.OperationOptions {
}

// @public
export type StudentLabsListAllResponse = StudentLabListResult;

// @public
export type StudentLabStatus = string;

// @public
export interface StudentListResult {
    readonly nextLink?: string;
    readonly value?: StudentDetails[];
}

// @public
export type StudentRole = string;

// @public
export interface Students {
    createOrUpdate(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, studentAlias: string, parameters: StudentDetails, options?: StudentsCreateOrUpdateOptionalParams): Promise<StudentsCreateOrUpdateResponse>;
    delete(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, studentAlias: string, options?: StudentsDeleteOptionalParams): Promise<void>;
    get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, studentAlias: string, options?: StudentsGetOptionalParams): Promise<StudentsGetResponse>;
    list(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: StudentsListOptionalParams): PagedAsyncIterableIterator<StudentDetails>;
}

// @public
export interface StudentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type StudentsCreateOrUpdateResponse = StudentDetails;

// @public
export interface StudentsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface StudentsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type StudentsGetResponse = StudentDetails;

// @public
export interface StudentsListNextOptionalParams extends coreClient.OperationOptions {
    includeDeleted?: boolean;
}

// @public
export type StudentsListNextResponse = StudentListResult;

// @public
export interface StudentsListOptionalParams extends coreClient.OperationOptions {
    includeDeleted?: boolean;
}

// @public
export type StudentsListResponse = StudentListResult;

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// (No @packageDocumentation comment for this package)

```
