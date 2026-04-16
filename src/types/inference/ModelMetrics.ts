// Original file: proto/model_config.proto

/**
 * @@  .. cpp:var:: message HistogramOptions
 * @@
 * @@     Histogram metrics options.
 * @@
 */
export interface _inference_ModelMetrics_MetricControl_HistogramOptions {
  /**
   * @@  .. cpp:var:: double buckets (repeated)
   * @@
   * @@     Repeated double type in ascending order for histogram bucket
   * @@     boundaries. Each bucket value represents a range less than or
   * @@     equal to itself. The range greater than the largest bucket value
   * @@     is allocated implicitly.
   * @@     For example, [ -5.0, -2, 0, 3.5, 5 ].
   * @@
   */
  buckets?: (number | string)[];
}

/**
 * @@  .. cpp:var:: message HistogramOptions
 * @@
 * @@     Histogram metrics options.
 * @@
 */
export interface _inference_ModelMetrics_MetricControl_HistogramOptions__Output {
  /**
   * @@  .. cpp:var:: double buckets (repeated)
   * @@
   * @@     Repeated double type in ascending order for histogram bucket
   * @@     boundaries. Each bucket value represents a range less than or
   * @@     equal to itself. The range greater than the largest bucket value
   * @@     is allocated implicitly.
   * @@     For example, [ -5.0, -2, 0, 3.5, 5 ].
   * @@
   */
  buckets: number[];
}

/**
 * @@
 * @@  .. cpp:var:: message MetricControl
 * @@
 * @@     Override metrics settings of this model.
 * @@
 */
export interface _inference_ModelMetrics_MetricControl {
  /**
   * @@  .. cpp:var:: MetricIdentifier metric_identifier
   * @@
   * @@     The identifier defining metrics to be overridden with the
   * @@     metric_options.
   * @@
   */
  metricIdentifier?: _inference_ModelMetrics_MetricControl_MetricIdentifier | null;
  /**
   * @@  .. cpp:var:: HistogramOptions histogram_options
   * @@
   * @@     Histogram options.
   * @@
   */
  histogramOptions?: _inference_ModelMetrics_MetricControl_HistogramOptions | null;
  /**
   * @@  .. cpp:var:: oneof metric_options
   * @@
   * @@     The value to override the metrics defined in metric_identifier.
   * @@
   */
  metricOptions?: "histogramOptions";
}

/**
 * @@
 * @@  .. cpp:var:: message MetricControl
 * @@
 * @@     Override metrics settings of this model.
 * @@
 */
export interface _inference_ModelMetrics_MetricControl__Output {
  /**
   * @@  .. cpp:var:: MetricIdentifier metric_identifier
   * @@
   * @@     The identifier defining metrics to be overridden with the
   * @@     metric_options.
   * @@
   */
  metricIdentifier: _inference_ModelMetrics_MetricControl_MetricIdentifier__Output | null;
  /**
   * @@  .. cpp:var:: HistogramOptions histogram_options
   * @@
   * @@     Histogram options.
   * @@
   */
  histogramOptions?: _inference_ModelMetrics_MetricControl_HistogramOptions__Output | null;
  /**
   * @@  .. cpp:var:: oneof metric_options
   * @@
   * @@     The value to override the metrics defined in metric_identifier.
   * @@
   */
  metricOptions: "histogramOptions";
}

/**
 * @@
 * @@  .. cpp:var:: message MetricIdentifier
 * @@
 * @@     Specify metrics to be overridden with metric_option.
 * @@
 */
export interface _inference_ModelMetrics_MetricControl_MetricIdentifier {
  /**
   * @@  .. cpp:var:: string family
   * @@
   * @@     The name of the metric family to override with the custom value.
   * @@     All core histogram metrics reported by Triton are customizable.
   * @@
   * https://github.com/triton-inference-server/server/blob/main/docs/user_guide/metrics.md#histograms
   * @@
   */
  family?: string;
}

/**
 * @@
 * @@  .. cpp:var:: message MetricIdentifier
 * @@
 * @@     Specify metrics to be overridden with metric_option.
 * @@
 */
export interface _inference_ModelMetrics_MetricControl_MetricIdentifier__Output {
  /**
   * @@  .. cpp:var:: string family
   * @@
   * @@     The name of the metric family to override with the custom value.
   * @@     All core histogram metrics reported by Triton are customizable.
   * @@
   * https://github.com/triton-inference-server/server/blob/main/docs/user_guide/metrics.md#histograms
   * @@
   */
  family: string;
}

/**
 * @@
 * @@  .. cpp:var:: message ModelMetrics
 * @@
 * @@     The metrics setting of this model.
 * @@     NOTE: Consider reusing this message body for backend metric custom
 * @@     configuration.
 * @@
 */
export interface ModelMetrics {
  /**
   * @@
   * @@  .. cpp::var:: MetricControl metric_control (repeated)
   * @@
   * @@     Optional custom configuration for selected metrics.
   * @@
   */
  metricControl?: _inference_ModelMetrics_MetricControl[];
}

/**
 * @@
 * @@  .. cpp:var:: message ModelMetrics
 * @@
 * @@     The metrics setting of this model.
 * @@     NOTE: Consider reusing this message body for backend metric custom
 * @@     configuration.
 * @@
 */
export interface ModelMetrics__Output {
  /**
   * @@
   * @@  .. cpp::var:: MetricControl metric_control (repeated)
   * @@
   * @@     Optional custom configuration for selected metrics.
   * @@
   */
  metricControl: _inference_ModelMetrics_MetricControl__Output[];
}
