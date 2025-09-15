/**
 * Point d'entrée centralisé pour tous les services SportSee
 *
 * Re-exporte tous les services, hooks, transformateurs et utilitaires
 * pour faciliter les imports dans l'application.
 *
 * @module services
 * @author SportSee Team
 * @since 1.0.0
 *
 * @example
 * // Import centralisé de tous les services
 * import {
 *   DataService,
 *   useUser,
 *   ActivityTransformer,
 *   DataNormalizer
 * } from './services/index.js';
 *
 * @example
 * // Import spécifique d'un service
 * import { DataService } from './services/index.js';
 */

// Services API - import direct
export { DataService } from "./api/DataService.js";

// Services de données - via index (multiple exports)
export * from "./data/index.js";

// Transformateurs - import direct
export * from "./transformers/ChartTransformers.js";

// Hooks - via index (multiple fichiers)
export * from "./hooks/index.js";
