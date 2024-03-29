// Original file: proto/health.proto

// Original file: proto/health.proto

/**
 * @@
 * @@.. cpp:enum:: ServingStatus
 * @@
 * @@   Statuses supported by GRPC's health check.
 * @@
 */
export const _grpc_health_v1_HealthCheckResponse_ServingStatus = {
  UNKNOWN: "UNKNOWN",
  SERVING: "SERVING",
  NOT_SERVING: "NOT_SERVING",
  SERVICE_UNKNOWN: "SERVICE_UNKNOWN",
} as const;

/**
 * @@
 * @@.. cpp:enum:: ServingStatus
 * @@
 * @@   Statuses supported by GRPC's health check.
 * @@
 */
export type _grpc_health_v1_HealthCheckResponse_ServingStatus =
  | "UNKNOWN"
  | 0
  | "SERVING"
  | 1
  | "NOT_SERVING"
  | 2
  | "SERVICE_UNKNOWN"
  | 3;

/**
 * @@
 * @@.. cpp:enum:: ServingStatus
 * @@
 * @@   Statuses supported by GRPC's health check.
 * @@
 */
export type _grpc_health_v1_HealthCheckResponse_ServingStatus__Output =
  (typeof _grpc_health_v1_HealthCheckResponse_ServingStatus)[keyof typeof _grpc_health_v1_HealthCheckResponse_ServingStatus];

/**
 * @@
 * @@.. cpp:var:: message HealthCheckResponse
 * @@
 * @@   Response message for HealthCheck
 * @@
 */
export interface HealthCheckResponse {
  status?: _grpc_health_v1_HealthCheckResponse_ServingStatus;
}

/**
 * @@
 * @@.. cpp:var:: message HealthCheckResponse
 * @@
 * @@   Response message for HealthCheck
 * @@
 */
export interface HealthCheckResponse__Output {
  status: _grpc_health_v1_HealthCheckResponse_ServingStatus__Output;
}
