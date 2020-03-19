// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';
import { Session } from '../../../index.js';

import * as protobuf from '../../../contrib/google/protobuf';
import * as operation from '../../../api/operation';
import * as SecurityGroupRule from '../../../SecurityGroupRule';

/**
 * A Network resource. For more information, see [Networks](/docs/vpc/concepts/network).
 */
export interface Network {
    /**
     * ID of the network.
     */
    id?: string;

    /**
     * ID of the folder that the network belongs to.
     */
    folderId?: string;

    /**
     * Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createdAt?: protobuf.Timestamp;

    /**
     * Name of the network.
     * The name is unique within the folder. 3-63 characters long.
     */
    name?: string;

    /**
     * Optional description of the network. 0-256 characters long.
     */
    description?: string;

    /**
     * Resource labels as `` key:value `` pairs. Мaximum of 64 per resource.
     */
    labels?: { [s: string]: string };
}

/**
 * A set of methods for managing Network resources.
 */
export class NetworkService {
    constructor(session?: Session);
    /**
     * Returns the specified Network resource.
     *
     * Get the list of available Network resources by making a [List] request.
     */
    get(request: GetNetworkRequest): Promise<Network>;

    /**
     * Retrieves the list of Network resources in the specified folder.
     */
    list(request: ListNetworksRequest): Promise<ListNetworksResponse>;

    /**
     * Creates a network in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateNetworkRequest): Promise<operation.Operation>;

    /**
     * Updates the specified network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(request: UpdateNetworkRequest): Promise<operation.Operation>;

    /**
     * Deletes the specified network.
     */
    delete(request: DeleteNetworkRequest): Promise<operation.Operation>;

    /**
     * Lists subnets from the specified network.
     */
    listSubnets(
        request: ListNetworkSubnetsRequest
    ): Promise<ListNetworkSubnetsResponse>;

    /**
     * Lists operations for the specified network.
     */
    listOperations(
        request: ListNetworkOperationsRequest
    ): Promise<ListNetworkOperationsResponse>;

    /**
     * Move network to another folder.
     */
    move(request: MoveNetworkRequest): Promise<operation.Operation>;
}

export interface GetNetworkRequest {
    /**
     * ID of the Network resource to return.
     * To get the network ID, use a [NetworkService.List] request.
     */
    networkId: string;
}

export interface ListNetworksRequest {
    /**
     * ID of the folder to list networks in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNetworksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListNetworksResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Network.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter?: string;
}

export interface ListNetworksResponse {
    /**
     * List of Network resources.
     */
    networks?: Network[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworksRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListNetworksRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface CreateNetworkRequest {
    /**
     * ID of the folder for this request to create a network in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * Name of the network.
     * The name must be unique within the folder.
     */
    name?: string;

    /**
     * Description of the network.
     */
    description?: string;

    /**
     * Resource labels as `` key:value `` pairs.
     */
    labels?: { [s: string]: string };
}

export interface CreateNetworkMetadata {
    /**
     * ID of the Network that is being created.
     */
    networkId?: string;
}

export interface UpdateNetworkRequest {
    /**
     * ID of the Network resource to update.
     * To get the network ID use a [NetworkService.List] request.
     */
    networkId: string;

    /**
     * Field mask that specifies which fields of the Network resource are going to be updated.
     */
    updateMask?: protobuf.FieldMask;

    /**
     * Name of the network.
     * The name must be unique within the folder.
     */
    name?: string;

    /**
     * Description of the network.
     */
    description?: string;

    /**
     * Resource labels as `` key:value `` pairs.
     */
    labels?: { [s: string]: string };
}

export interface UpdateNetworkMetadata {
    /**
     * ID of the Network resource that is being updated.
     */
    networkId?: string;
}

export interface DeleteNetworkRequest {
    /**
     * ID of the Network resource to update.
     * To get the network ID, use a [NetworkService.List] request.
     */
    networkId: string;
}

export interface DeleteNetworkMetadata {
    /**
     * ID of the network that is being deleted.
     */
    networkId?: string;
}

export interface ListNetworkSubnetsRequest {
    /**
     * ID of the Network resource to list subnets for.
     */
    networkId: string;

    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNetworkSubnetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. Set [page_token]
     * to the [ListNetworkSubnetsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
}

export interface ListNetworkSubnetsResponse {
    /**
     * List of subnets that belong to the network which is specified in the request.
     */
    subnets?: Subnet[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworkSubnetsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListNetworkSubnetsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface ListNetworkOperationsRequest {
    /**
     * ID of the Network resource to list operations for.
     */
    networkId: string;

    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListNetworkOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListNetworkOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;
}

export interface ListNetworkOperationsResponse {
    /**
     * List of operations for the specified network.
     */
    operations?: operation.Operation[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworkOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListNetworkOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface MoveNetworkRequest {
    /**
     * ID of the Network resource to move.
     */
    networkId: string;

    /**
     * ID of the destination folder.
     */
    destinationFolderId: string;
}

export interface MoveNetworkMetadata {
    /**
     * ID of the network that is being moved.
     */
    networkId?: string;
}

/**
 * A RouteTable resource. For more information, see [Static Routes](/docs/vpc/concepts/static-routes).
 */
export interface RouteTable {
    /**
     * ID of the route table.
     */
    id?: string;

    /**
     * ID of the folder that the route table belongs to.
     */
    folderId?: string;

    /**
     * Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createdAt?: protobuf.Timestamp;

    /**
     * Name of the route table. The name is unique within the project. 3-63 characters long.
     */
    name?: string;

    /**
     * Optional description of the route table. 0-256 characters long.
     */
    description?: string;

    /**
     * Resource labels as `` key:value `` pairs. Мaximum of 64 per resource.
     */
    labels?: { [s: string]: string };

    /**
     * ID of the network the route table belongs to.
     */
    networkId?: string;

    /**
     * List of static routes.
     */
    staticRoutes?: StaticRoute[];
}

/**
 * A StaticRoute resource. For more information, see [Static Routes](/docs/vpc/concepts/static-routes).
 */
export interface StaticRoute {
    /**
     * Destination subnet in CIDR notation
     */
    destinationPrefix?: string;

    /**
     * Next hop IP address
     */
    nextHopAddress?: string;

    /**
     * Resource labels as `` key:value `` pairs. Мaximum of 64 per resource.
     */
    labels?: { [s: string]: string };
}

/**
 * A set of methods for managing RouteTable resources.
 */
export class RouteTableService {
    constructor(session?: Session);
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get(request: GetRouteTableRequest): Promise<RouteTable>;

    /**
     * Retrieves the list of RouteTable resources in the specified folder.
     */
    list(request: ListRouteTablesRequest): Promise<ListRouteTablesResponse>;

    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateRouteTableRequest): Promise<operation.Operation>;

    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(request: UpdateRouteTableRequest): Promise<operation.Operation>;

    /**
     * Deletes the specified route table.
     */
    delete(request: DeleteRouteTableRequest): Promise<operation.Operation>;

    /**
     * List operations for the specified route table.
     */
    listOperations(
        request: ListRouteTableOperationsRequest
    ): Promise<ListRouteTableOperationsResponse>;

    /**
     * Move route table to another folder.
     */
    move(request: MoveRouteTableRequest): Promise<operation.Operation>;
}

export interface GetRouteTableRequest {
    /**
     * ID of the RouteTable resource to return.
     * To get the route table ID use a [RouteTableService.List] request.
     */
    routeTableId: string;
}

export interface ListRouteTablesRequest {
    /**
     * ID of the folder that the route table belongs to.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRouteTablesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRouteTablesResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [RouteTable.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter?: string;
}

export interface ListRouteTablesResponse {
    /**
     * List of RouteTable resources.
     */
    routeTables?: RouteTable[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRouteTablesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRouteTablesRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface CreateRouteTableRequest {
    /**
     * ID of the folder that the route table belongs to.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * Name of the route table.
     * The name must be unique within the folder.
     */
    name?: string;

    /**
     * Description of the route table.
     */
    description?: string;

    /**
     * Resource labels, `` key:value `` pairs.
     */
    labels?: { [s: string]: string };

    /**
     * ID of the network the route table belongs to.
     */
    networkId: string;

    /**
     * List of static routes.
     */
    staticRoutes?: StaticRoute[];
}

export interface CreateRouteTableMetadata {
    /**
     * ID of the route table that is being created.
     */
    routeTableId?: string;
}

export interface UpdateRouteTableRequest {
    /**
     * ID of the RouteTable resource to update.
     */
    routeTableId: string;

    /**
     * Field mask that specifies which fields of the RouteTable resource are going to be updated.
     */
    updateMask?: protobuf.FieldMask;

    /**
     * Name of the route table.
     * The name must be unique within the folder.
     */
    name?: string;

    /**
     * Description of the route table.
     */
    description?: string;

    /**
     * Resource labels as `` key:value `` pairs.
     */
    labels?: { [s: string]: string };

    /**
     * List of static routes.
     */
    staticRoutes?: StaticRoute[];
}

export interface UpdateRouteTableMetadata {
    /**
     * ID of the RouteTable resource that is being updated.
     */
    routeTableId?: string;
}

export interface DeleteRouteTableRequest {
    /**
     * ID of the route table to delete.
     * To get the route table ID use a [RouteTableService.List] request.
     */
    routeTableId: string;
}

export interface DeleteRouteTableMetadata {
    /**
     * ID of the RouteTable resource that is being deleted.
     */
    routeTableId?: string;
}

export interface ListRouteTableOperationsRequest {
    /**
     * ID of the RouteTable resource to list operations for.
     */
    routeTableId: string;

    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListRouteTableOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRouteTableOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;
}

export interface ListRouteTableOperationsResponse {
    /**
     * List of operations for the specified RouteTable resource.
     */
    operations?: operation.Operation[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRouteTableOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListRouteTableOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface MoveRouteTableRequest {
    /**
     * ID of the RouteTable resource to move.
     */
    routeTableId: string;

    /**
     * ID of the destination folder.
     */
    destinationFolderId: string;
}

export interface MoveRouteTableMetadata {
    /**
     * ID of the RouteTable resource that is being moved.
     */
    routeTableId?: string;
}

export interface SecurityGroup {
    id?: string;

    folderId?: string;

    createdAt?: protobuf.Timestamp;

    name?: string;

    description?: string;

    labels?: { [s: string]: string };

    networkId?: string;

    status?: SecurityGroup.Status;

    rules?: SecurityGroupRule[];
}

export namespace SecurityGroup {
    export enum Status {
        STATUS_UNSPECIFIED = 0,

        CREATING = 1,

        ACTIVE = 2,

        /**
         * updating is a long operation because we must update all instances in SG
         */
        UPDATING = 3,

        DELETING = 4,
    }
}

export interface SecurityGroupRule {
    /**
     * generated by api server after rule creation
     */
    id?: string;

    description?: string;

    labels?: { [s: string]: string };

    direction: SecurityGroupRule.Direction;

    ports?: PortRange;

    /**
     * null value means any protocol
     * values from https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml
     */
    protocolName?: string;

    protocolNumber?: Long;

    cidrBlocks?: CidrBlocks;
}

export namespace SecurityGroupRule {
    export enum Direction {
        DIRECTION_UNSPECIFIED = 0,

        INGRESS = 1,

        EGRESS = 2,
    }
}

export interface PortRange {
    fromPort?: Long;

    toPort?: Long;
}

export interface CidrBlocks {
    v4CidrBlocks?: string[];

    v6CidrBlocks?: string[];
}

export class SecurityGroupService {
    constructor(session?: Session);
    get(request: GetSecurityGroupRequest): Promise<SecurityGroup>;

    list(
        request: ListSecurityGroupsRequest
    ): Promise<ListSecurityGroupsResponse>;

    create(request: CreateSecurityGroupRequest): Promise<operation.Operation>;

    update(request: UpdateSecurityGroupRequest): Promise<operation.Operation>;

    updateRules(
        request: UpdateSecurityGroupRulesRequest
    ): Promise<operation.Operation>;

    /**
     * update rule description or labels
     */
    updateRule(
        request: UpdateSecurityGroupRuleRequest
    ): Promise<operation.Operation>;

    delete(request: DeleteSecurityGroupRequest): Promise<operation.Operation>;

    move(request: MoveSecurityGroupRequest): Promise<operation.Operation>;

    listOperations(
        request: ListSecurityGroupOperationsRequest
    ): Promise<ListSecurityGroupOperationsResponse>;
}

export interface GetSecurityGroupRequest {
    securityGroupId: string;
}

export interface ListSecurityGroupsRequest {
    folderId: string;

    pageSize?: Long;

    pageToken?: string;

    /**
     * filter by network_id is here
     */
    filter?: string;
}

export interface ListSecurityGroupsResponse {
    securityGroups?: SecurityGroup[];

    nextPageToken?: string;
}

export interface CreateSecurityGroupRequest {
    folderId: string;

    name?: string;

    description?: string;

    labels?: { [s: string]: string };

    networkId: string;

    ruleSpecs?: SecurityGroupRuleSpec[];
}

export interface SecurityGroupRuleSpec {
    description?: string;

    labels?: { [s: string]: string };

    direction: SecurityGroupRule.Direction;

    ports?: PortRange;

    protocolName?: string;

    protocolNumber?: Long;

    cidrBlocks?: CidrBlocks;
}

export interface CreateSecurityGroupMetadata {
    securityGroupId?: string;
}

export interface UpdateSecurityGroupRequest {
    securityGroupId: string;

    updateMask?: protobuf.FieldMask;

    name?: string;

    description?: string;

    labels?: { [s: string]: string };

    /**
     * all existing rules will be replaced with given list
     */
    ruleSpecs?: SecurityGroupRuleSpec[];
}

export interface UpdateSecurityGroupMetadata {
    securityGroupId?: string;
}

export interface UpdateSecurityGroupRulesRequest {
    securityGroupId: string;

    /**
     * list of rules ids to delete
     */
    deletionRuleIds?: string[];

    /**
     * list of rules ids to delete
     */
    additionRuleSpecs?: SecurityGroupRuleSpec[];
}

export interface UpdateSecurityGroupRuleRequest {
    securityGroupId: string;

    ruleId: string;

    updateMask?: protobuf.FieldMask;

    description?: string;

    labels?: { [s: string]: string };
}

export interface UpdateSecurityGroupRuleMetadata {
    securityGroupId?: string;

    ruleId?: string;
}

export interface DeleteSecurityGroupRequest {
    securityGroupId: string;
}

export interface DeleteSecurityGroupMetadata {
    securityGroupId?: string;
}

export interface ListSecurityGroupOperationsRequest {
    securityGroupId: string;

    pageSize?: Long;

    pageToken?: string;
}

export interface ListSecurityGroupOperationsResponse {
    operations?: operation.Operation[];

    nextPageToken?: string;
}

export interface MoveSecurityGroupRequest {
    securityGroupId: string;

    destinationFolderId: string;
}

export interface MoveSecurityGroupMetadata {
    securityGroupId?: string;
}

/**
 * A Subnet resource. For more information, see [Subnets](/docs/vpc/concepts/subnets).
 */
export interface Subnet {
    /**
     * ID of the subnet.
     */
    id?: string;

    /**
     * ID of the folder that the subnet belongs to.
     */
    folderId?: string;

    /**
     * Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createdAt?: protobuf.Timestamp;

    /**
     * Name of the subnet. The name is unique within the project. 3-63 characters long.
     */
    name?: string;

    /**
     * Optional description of the subnet. 0-256 characters long.
     */
    description?: string;

    /**
     * Resource labels as `` key:value `` pairs. Мaximum of 64 per resource.
     */
    labels?: { [s: string]: string };

    /**
     * ID of the network the subnet belongs to.
     */
    networkId?: string;

    /**
     * ID of the availability zone where the subnet resides.
     */
    zoneId?: string;

    /**
     * CIDR block.
     * The range of internal addresses that are defined for this subnet.
     * This field can be set only at Subnet resource creation time and cannot be changed.
     * For example, 10.0.0.0/22 or 192.168.0.0/24.
     * Minimum subnet size is /28, maximum subnet size is /16.
     */
    v4CidrBlocks?: string[];

    /**
     * IPv6 not available yet.
     */
    v6CidrBlocks?: string[];

    /**
     * ID of route table the subnet is linked to.
     */
    routeTableId?: string;
}

/**
 * A set of methods for managing Subnet resources.
 */
export class SubnetService {
    constructor(session?: Session);
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    get(request: GetSubnetRequest): Promise<Subnet>;

    /**
     * Retrieves the list of Subnet resources in the specified folder.
     */
    list(request: ListSubnetsRequest): Promise<ListSubnetsResponse>;

    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateSubnetRequest): Promise<operation.Operation>;

    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(request: UpdateSubnetRequest): Promise<operation.Operation>;

    /**
     * Deletes the specified subnet.
     */
    delete(request: DeleteSubnetRequest): Promise<operation.Operation>;

    /**
     * List operations for the specified subnet.
     */
    listOperations(
        request: ListSubnetOperationsRequest
    ): Promise<ListSubnetOperationsResponse>;

    /**
     * Move subnet to another folder.
     */
    move(request: MoveSubnetRequest): Promise<operation.Operation>;
}

export interface GetSubnetRequest {
    /**
     * ID of the Subnet resource to return.
     * To get the subnet ID use a [SubnetService.List] request.
     */
    subnetId: string;
}

export interface ListSubnetsRequest {
    /**
     * ID of the folder to list subnets in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListSubnetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSubnetsResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter?: string;
}

export interface ListSubnetsResponse {
    /**
     * List of Subnet resources.
     */
    subnets?: Subnet[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSubnetsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSubnetsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface CreateSubnetRequest {
    /**
     * ID of the folder to create a subnet in.
     * To get folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * Name of the subnet.
     * The name must be unique within the folder.
     */
    name?: string;

    /**
     * Description of the subnet.
     */
    description?: string;

    /**
     * Resource labels, `` key:value `` pairs.
     */
    labels?: { [s: string]: string };

    /**
     * ID of the network to create subnet in.
     */
    networkId: string;

    /**
     * ID of the availability zone where the subnet resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId?: string;

    /**
     * CIDR block.
     * The range of internal addresses that are defined for this subnet.
     * This field can be set only at Subnet resource creation time and cannot be changed.
     * For example, 10.0.0.0/22 or 192.168.0.0/24.
     * Minimum subnet size is /28, maximum subnet size is /16.
     */
    v4CidrBlocks?: string[];

    /**
     * ID of route table the subnet is linked to.
     */
    routeTableId?: string;
}

export interface CreateSubnetMetadata {
    /**
     * ID of the subnet that is being created.
     */
    subnetId?: string;
}

export interface UpdateSubnetRequest {
    /**
     * ID of the Subnet resource to update.
     */
    subnetId: string;

    /**
     * Field mask that specifies which fields of the Subnet resource are going to be updated.
     */
    updateMask?: protobuf.FieldMask;

    /**
     * Name of the subnet.
     * The name must be unique within the folder.
     */
    name?: string;

    /**
     * Description of the subnet.
     */
    description?: string;

    /**
     * Resource labels as `` key:value `` pairs.
     */
    labels?: { [s: string]: string };

    /**
     * ID of route table the subnet is linked to.
     */
    routeTableId?: string;
}

export interface UpdateSubnetMetadata {
    /**
     * ID of the Subnet resource that is being updated.
     */
    subnetId?: string;
}

export interface DeleteSubnetRequest {
    /**
     * ID of the subnet to delete.
     * To get the subnet ID use a [SubnetService.List] request.
     */
    subnetId: string;
}

export interface DeleteSubnetMetadata {
    /**
     * ID of the Subnet resource that is being deleted.
     */
    subnetId?: string;
}

export interface ListSubnetOperationsRequest {
    /**
     * ID of the Subnet resource to list operations for.
     */
    subnetId: string;

    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListSubnetOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSubnetOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;
}

export interface ListSubnetOperationsResponse {
    /**
     * List of operations for the specified Subnet resource.
     */
    operations?: operation.Operation[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSubnetOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListSubnetOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface MoveSubnetRequest {
    /**
     * ID of the Subnet resource to move.
     */
    subnetId: string;

    /**
     * ID of the destination folder.
     */
    destinationFolderId: string;
}

export interface MoveSubnetMetadata {
    /**
     * ID of the Subnet resource that is being moved.
     */
    subnetId?: string;
}
