export type ClassNameMappingRule = {
    importClassName: string;
    exportClassName?: string;
};

export type ServicesConfig = Record<string, Record<string, ClassNameMappingRule[] | ClassNameMappingRule>>;

export const servicesConfig: ServicesConfig = {
    ai: {
        llm_service: [
            { importClassName: 'TextGenerationServiceClient' },
            { importClassName: 'TokenizerServiceClient' },
            { importClassName: 'EmbeddingsServiceClient' },
            { importClassName: 'TextGenerationAsyncServiceClient' },
        ],
        stt_service: { importClassName: 'SttServiceClient' },
        stt_service_v3: [
            { importClassName: 'RecognizerClient' },
            { importClassName: 'AsyncRecognizerClient' },
        ],
        translate_translation_service: { importClassName: 'TranslationServiceClient' },
        tts_service: { importClassName: 'SynthesizerClient' },
        vision_service: { importClassName: 'VisionServiceClient' },
        vision_image_classifier_service: { importClassName: 'ImageClassifierServiceClient' },
        ocr_service: [
            { importClassName: 'TextRecognitionServiceClient' },
            { importClassName: 'TextRecognitionAsyncServiceClient' },
        ],
    },
    apploadbalancer: {
        backend_group_service: { importClassName: 'BackendGroupServiceClient' },
        http_router_service: { importClassName: 'HttpRouterServiceClient' },
        load_balancer_service: { importClassName: 'LoadBalancerServiceClient' },
        target_group_service: {
            importClassName: 'TargetGroupServiceClient',
            exportClassName: 'AlbTargetGroupServiceClient',
        },
        virtual_host_service: { importClassName: 'VirtualHostServiceClient' },
        resource_service: { importClassName: 'ResourceServiceClient' },
    },
    backup: {
        backup_service: { importClassName: 'BackupServiceClient', exportClassName: 'BackupBackupServiceClient' },
        policy_service: { importClassName: 'PolicyServiceClient', exportClassName: 'BackupPolicyServiceClient' },
        provider_service: { importClassName: 'ProviderServiceClient', exportClassName: 'BackupProviderServiceClient' },
        resource_service: { importClassName: 'ResourceServiceClient', exportClassName: 'BackupResourceServiceClient' },
    },
    billing: {
        billing_account_service: { importClassName: 'BillingAccountServiceClient' },
        budget_service: { importClassName: 'BudgetServiceClient' },
        customer_service: { importClassName: 'CustomerServiceClient' },
        service_service: { importClassName: 'ServiceServiceClient' },
        sku_service: { importClassName: 'SkuServiceClient' },
    },
    cdn: {
        cache_service: { importClassName: 'CacheServiceClient', exportClassName: 'CDNCacheServiceClient' },
        origin_group_service: {
            importClassName: 'OriginGroupServiceClient',
            exportClassName: 'CDNOriginGroupServiceClient',
        },
        origin_service: { importClassName: 'OriginServiceClient', exportClassName: 'CDNOriginServiceClient' },
        provider_service: { importClassName: 'ProviderServiceClient', exportClassName: 'CDNProviderServiceClient' },
        resource_service: { importClassName: 'ResourceServiceClient', exportClassName: 'CDNResourceServiceClient' },
        raw_logs_service: { importClassName: 'RawLogsServiceClient', exportClassName: 'CDNRawLogsServiceClient' },
    },
    certificatemanager: {
        certificate_content_service: { importClassName: 'CertificateContentServiceClient' },
        certificate_service: { importClassName: 'CertificateServiceClient' },
    },
    compute: {
        disk_placement_group_service: { importClassName: 'DiskPlacementGroupServiceClient' },
        disk_service: { importClassName: 'DiskServiceClient' },
        disk_type_service: { importClassName: 'DiskTypeServiceClient' },
        filesystem_service: { importClassName: 'FilesystemServiceClient' },
        host_group_service: { importClassName: 'HostGroupServiceClient' },
        host_type_service: { importClassName: 'HostTypeServiceClient' },
        image_service: { importClassName: 'ImageServiceClient', exportClassName: 'ComputeImageServiceClient' },
        instance_service: { importClassName: 'InstanceServiceClient' },
        placement_group_service: { importClassName: 'PlacementGroupServiceClient' },
        snapshot_service: { importClassName: 'SnapshotServiceClient' },
        zone_service: { importClassName: 'ZoneServiceClient' },
        instance_group_service: { importClassName: 'InstanceGroupServiceClient' },
        snapshot_schedule_service: { importClassName: 'SnapshotScheduleServiceClient' },
        gpu_cluster_service: { importClassName: 'GpuClusterServiceClient' },
    },
    containerregistry: {
        image_service: { importClassName: 'ImageServiceClient', exportClassName: 'CrImageServiceClient' },
        lifecycle_policy_service: { importClassName: 'LifecyclePolicyServiceClient' },
        registry_service: { importClassName: 'RegistryServiceClient' },
        repository_service: { importClassName: 'RepositoryServiceClient' },
        scanner_service: { importClassName: 'ScannerServiceClient' },
        scan_policy_service: { importClassName: 'ScanPolicyServiceClient' },
    },
    dataproc: {
        cluster_service: { importClassName: 'ClusterServiceClient', exportClassName: 'DataProcClusterServiceClient' },
        job_service: { importClassName: 'JobServiceClient' },
        resource_preset_service: { importClassName: 'ResourcePresetServiceClient' },
        subcluster_service: { importClassName: 'SubclusterServiceClient' },
        manager_job_service: { importClassName: 'JobServiceClient', exportClassName: 'ManagerJobServiceClient' },
        manager_service: { importClassName: 'DataprocManagerServiceClient' },
    },
    datasphere: {
        app_token_service: { importClassName: 'AppTokenServiceClient' },
        folder_budget_service: { importClassName: 'FolderBudgetServiceClient' },
        node_service: { importClassName: 'NodeServiceClient' },
        project_data_service: { importClassName: 'ProjectDataServiceClient' },
        project_service: { importClassName: 'ProjectServiceClient' },
        project_service_v2: { importClassName: 'ProjectServiceClient', exportClassName: 'ProjectServiceClientV2'},
        community_service: { importClassName: 'CommunityServiceClient' },
    },
    datatransfer: {
        endpoint_service: { importClassName: 'EndpointServiceClient' },
        transfer_service: { importClassName: 'TransferServiceClient' },
    },
    dns: { dns_zone_service: { importClassName: 'DnsZoneServiceClient' } },
    endpoint: {
        api_endpoint_service: { importClassName: 'ApiEndpointServiceClient' },
    },
    iam: {
        api_key_service: { importClassName: 'ApiKeyServiceClient' },
        iam_token_service: { importClassName: 'IamTokenServiceClient' },
        key_service: { importClassName: 'KeyServiceClient' },
        role_service: { importClassName: 'RoleServiceClient' },
        service_account_service: { importClassName: 'ServiceAccountServiceClient' },
        user_account_service: { importClassName: 'UserAccountServiceClient' },
        yandex_passport_user_account_service: { importClassName: 'YandexPassportUserAccountServiceClient' },
        access_key_service: { importClassName: 'AccessKeyServiceClient' },
    },
    iot: {
        broker_broker_data_service: { importClassName: 'BrokerDataServiceClient' },
        broker_service: { importClassName: 'BrokerServiceClient' },
        devices_device_data_service: { importClassName: 'DeviceDataServiceClient' },
        devices_device_service: { importClassName: 'DeviceServiceClient' },
        devices_registry_data_service: { importClassName: 'RegistryDataServiceClient' },
        devices_registry_service: {
            importClassName: 'RegistryServiceClient',
            exportClassName: 'IotRegistryServiceClient',
        },
    },
    k8s: {
        cluster_service: { importClassName: 'ClusterServiceClient', exportClassName: 'K8sClusterServiceClient' },
        node_group_service: { importClassName: 'NodeGroupServiceClient' },
        version_service: { importClassName: 'VersionServiceClient' },
    },
    kms: {
        symmetric_crypto_service: { importClassName: 'SymmetricCryptoServiceClient' },
        symmetric_key_service: { importClassName: 'SymmetricKeyServiceClient' },
        asymmetric_encryption_crypto_service: { importClassName: 'AsymmetricEncryptionCryptoServiceClient' },
        asymmetric_encryption_key_service: { importClassName: 'AsymmetricEncryptionKeyServiceClient' },
        asymmetric_signature_crypto_service: { importClassName: 'AsymmetricSignatureCryptoServiceClient' },
        asymmetric_signature_key_service: { importClassName: 'AsymmetricSignatureKeyServiceClient' },

    },
    loadtesting: {
        agent_agent_registration_service: {
            importClassName: 'AgentRegistrationServiceClient',
            exportClassName: 'LoadTestingAgentRegistrationServiceClient',
        },
        agent_service: { importClassName: 'AgentServiceClient', exportClassName: 'LoadTestingAgentServiceClient' },
        agent_job_service: { importClassName: 'JobServiceClient', exportClassName: 'LoadTestingJobServiceClient' },
        agent_monitoring_service: {
            importClassName: 'MonitoringServiceClient',
            exportClassName: 'LoadTestingMonitoringServiceClient',
        },
        agent_test_service: { importClassName: 'TestServiceClient', exportClassName: 'LoadTestingTestServiceClient' },
        agent_trail_service: {
            importClassName: 'TrailServiceClient',
            exportClassName: 'LoadTestingTrailServiceClient',
        },
        api_agent_service: {
            importClassName: 'AgentServiceClient',
            exportClassName: 'LoadTestingApiAgentServiceClient',
        },
    },
    loadbalancer: {
        network_load_balancer_service: { importClassName: 'NetworkLoadBalancerServiceClient' },
        target_group_service: { importClassName: 'TargetGroupServiceClient' },
    },
    lockbox: {
        payload_service: { importClassName: 'PayloadServiceClient' },
        secret_service: { importClassName: 'SecretServiceClient' },
    },
    logging: {
        log_group_service: { importClassName: 'LogGroupServiceClient' },
        log_ingestion_service: { importClassName: 'LogIngestionServiceClient' },
        log_reading_service: { importClassName: 'LogReadingServiceClient' },
        export_service: { importClassName: 'ExportServiceClient' },
        sink_service: { importClassName: 'SinkServiceClient' },
    },
    marketplace: {
        image_product_usage_service: {
            importClassName: 'ImageProductUsageServiceClient',
            exportClassName: 'MarketplaceImageProductUsageServiceClient',
        },
        licensemanager_instance_service: {
            importClassName: 'InstanceServiceClient',
            exportClassName: 'MarketplaceInstanceServiceClient',
        },
        licensemanager_lock_service: {
            importClassName: 'LockServiceClient',
            exportClassName: 'MarketplaceLockServiceClient',
        },
        metering_image_product_usage_service: {
            importClassName: 'ImageProductUsageServiceClient',
            exportClassName: 'MarketplaceMeteringImageProductUsageServiceClient',
        },
    },
    mdb: {
        clickhouse_backup_service: {
            importClassName: 'BackupServiceClient',
            exportClassName: 'ClickHouseBackupServiceClient',
        },
        clickhouse_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'ClickHouseClusterServiceClient',
        },
        clickhouse_database_service: { importClassName: 'DatabaseServiceClient' },
        clickhouse_format_schema_service: { importClassName: 'FormatSchemaServiceClient' },
        clickhouse_ml_model_service: { importClassName: 'MlModelServiceClient' },
        clickhouse_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'ClickHouseResourcePresetServiceClient',
        },
        clickhouse_user_service: {
            importClassName: 'UserServiceClient',
            exportClassName: 'ClickHouseUserServiceClient',
        },
        clickhouse_versions_service: { importClassName: 'VersionsServiceClient' },
        elasticsearch_auth_service: { importClassName: 'AuthServiceClient' },
        elasticsearch_backup_service: {
            importClassName: 'BackupServiceClient',
            exportClassName: 'ElasticBackupServiceClient',
        },
        elasticsearch_extension_service: {
            importClassName: 'ExtensionServiceClient',
            exportClassName: 'ElasticExtensionServiceClient',
        },
        elasticsearch_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'ElasticClusterServiceClient',
        },
        elasticsearch_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'ElasticResourcePresetServiceClient',
        },
        elasticsearch_user_service: {
            importClassName: 'UserServiceClient',
            exportClassName: 'ElasticUserServiceClient',
        },
        greenplum_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'GreenplumClusterServiceClient',
        },
        greenplum_backup_service: {
            importClassName: 'BackupServiceClient',
            exportClassName: 'GreenplumBackupServiceClient',
        },
        greenplum_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'GreenplumResourcePresetServiceClient',
        },
        kafka_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'KafkaClusterServiceClient',
        },
        kafka_connector_service: { importClassName: 'ConnectorServiceClient' },
        kafka_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'KafkaResourcePresetServiceClient',
        },
        kafka_topic_service: { importClassName: 'TopicServiceClient' },
        kafka_user_service: { importClassName: 'UserServiceClient', exportClassName: 'KafkaUserServiceClient' },
        mongodb_backup_service: { importClassName: 'BackupServiceClient', exportClassName: 'MongoBackupServiceClient' },
        mongodb_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'MongoClusterServiceClient',
        },
        mongodb_database_service: {
            importClassName: 'DatabaseServiceClient',
            exportClassName: 'MongoDatabaseServiceClient',
        },
        mongodb_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'MongoResourcePresetServiceClient',
        },
        mongodb_user_service: { importClassName: 'UserServiceClient', exportClassName: 'MongoUserServiceClient' },
        mysql_backup_service: { importClassName: 'BackupServiceClient', exportClassName: 'MysqlBackupServiceClient' },
        mysql_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'MysqlClusterServiceClient',
        },
        mysql_database_service: {
            importClassName: 'DatabaseServiceClient',
            exportClassName: 'MysqlDatabaseServiceClient',
        },
        mysql_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'MysqlResourcePresetServiceClient',
        },
        mysql_user_service: { importClassName: 'UserServiceClient', exportClassName: 'MysqlUserServiceClient' },
        opensearch_backup_service: {
            importClassName: 'BackupServiceClient',
            exportClassName: 'OpenSearchBackupServiceClient',
        },
        opensearch_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'OpenSearchClusterServiceClient',
        },
        opensearch_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'OpenSearchResourcePresetServiceClient',
        },
        postgresql_backup_service: {
            importClassName: 'BackupServiceClient',
            exportClassName: 'PgsqlBackupServiceClient',
        },
        postgresql_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'PgsqlClusterServiceClient',
        },
        postgresql_database_service: {
            importClassName: 'DatabaseServiceClient',
            exportClassName: 'PgsqlDatabaseServiceClient',
        },
        postgresql_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'PgsqlResourcePresetServiceClient',
        },
        postgresql_user_service: { importClassName: 'UserServiceClient', exportClassName: 'PgsqlUserServiceClient' },
        postgresql_perf_diag_service: {
            importClassName: 'PerformanceDiagnosticsServiceClient',
            exportClassName: 'PgsqlPerformanceDiagnosticsServiceClient',
        },
        redis_backup_service: { importClassName: 'BackupServiceClient', exportClassName: 'RedisBackupServiceClient' },
        redis_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'RedisClusterServiceClient',
        },
        redis_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'RedisResourcePresetServiceClient',
        },
        sqlserver_backup_service: {
            importClassName: 'BackupServiceClient',
            exportClassName: 'SqlServerBackupServiceClient',
        },
        sqlserver_cluster_service: {
            importClassName: 'ClusterServiceClient',
            exportClassName: 'SqlServerClusterServiceClient',
        },
        sqlserver_database_service: {
            importClassName: 'DatabaseServiceClient',
            exportClassName: 'SqlServerDatabaseServiceClient',
        },
        sqlserver_resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'SqlServerResourcePresetServiceClient',
        },
        sqlserver_user_service: { importClassName: 'UserServiceClient', exportClassName: 'SqlServerUserServiceClient' },
    },
    monitoring: {
        dashboard_service: { importClassName: 'DashboardServiceClient' },
    },
    operation: {
        operation_service: { importClassName: 'OperationServiceClient' },
    },
    organizationmanager: {
        group_service: { importClassName: 'GroupServiceClient' },
        organization_service: { importClassName: 'OrganizationServiceClient' },
        user_service: { importClassName: 'UserServiceClient' },
        certificate_service: {
            importClassName: 'CertificateServiceClient',
            exportClassName: 'OmCertificateServiceClient',
        },
        federation_service: { importClassName: 'FederationServiceClient' },
        group_mapping_service: { importClassName: 'GroupMappingServiceClient' },
        ssh_certificate_service: { importClassName: 'SshCertificateServiceClient' },
    },
    resourcemanager: {
        cloud_service: { importClassName: 'CloudServiceClient' },
        folder_service: { importClassName: 'FolderServiceClient' },
    },
    serverless: {
        apigateway_service: { importClassName: 'ApiGatewayServiceClient' },
        containers_container_service: { importClassName: 'ContainerServiceClient' },
        functions_function_service: { importClassName: 'FunctionServiceClient' },
        mdbproxy_proxy_service: { importClassName: 'ProxyServiceClient' },
        triggers_trigger_service: { importClassName: 'TriggerServiceClient' },
        apigateway_connection_service: {
            importClassName: 'ConnectionServiceClient',
            exportClassName: 'WebSocketConnectionServiceClient',
        },
    },
    storage: {
        bucket_service: { importClassName: 'BucketServiceClient' },
    },
    vpc: {
        address_service: { importClassName: 'AddressServiceClient' },
        network_service: { importClassName: 'NetworkServiceClient' },
        route_table_service: { importClassName: 'RouteTableServiceClient' },
        security_group_service: { importClassName: 'SecurityGroupServiceClient' },
        subnet_service: { importClassName: 'SubnetServiceClient' },
        gateway_service: { importClassName: 'GatewayServiceClient' },
    },
    ydb: {
        backup_service: { importClassName: 'BackupServiceClient', exportClassName: 'YdbBackupServiceClient' },
        database_service: { importClassName: 'DatabaseServiceClient', exportClassName: 'YdbDatabaseServiceClient' },
        location_service: { importClassName: 'LocationServiceClient' },
        resource_preset_service: {
            importClassName: 'ResourcePresetServiceClient',
            exportClassName: 'YdbResourcePresetServiceClient',
        },
        storage_type_service: { importClassName: 'StorageTypeServiceClient' },
    },
};
