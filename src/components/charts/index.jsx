/**
 * Module d'export centralisé pour tous les composants de graphiques SportSee
 *
 * Ce fichier sert de point d'entrée unique pour importer tous les composants
 * de visualisation de données de l'application SportSee.
 *
 * @module components/charts
 * @author SportSee Team
 * @since 1.0.0
 *
 * @example
 * // Import de tous les graphiques
 * import { ActivityChart, SessionsChart, PerformanceChart, ScoreChart } from './components/charts';
 *
 * @example
 * // Import sélectif
 * import { ActivityChart } from './components/charts';
 *
 * @example
 * // Utilisation dans un dashboard
 * function Dashboard({ userId }) {
 *   return (
 *     <div className="charts-grid">
 *       <ActivityChart userId={userId} />
 *       <SessionsChart userId={userId} />
 *       <PerformanceChart userId={userId} />
 *       <ScoreChart userId={userId} />
 *     </div>
 *   );
 * }
 */

import ActivityChartReal from "./ActivityChart.jsx";
import SessionsChartReal from "./SessionsChart.jsx";
import PerformanceChartReal from "./PerformanceChart.jsx";
import ScoreChartReal from "./ScoreChart.jsx";

/**
 * Composant graphique d'activité quotidienne
 * @type {React.ComponentType<{userId?: number}>}
 * @see ActivityChartReal
 */
const ActivityChart = ActivityChartReal;

/**
 * Composant graphique des sessions moyennes
 * @type {React.ComponentType<{userId?: number}>}
 * @see SessionsChartReal
 */
const SessionsChart = SessionsChartReal;

/**
 * Composant graphique radar de performance
 * @type {React.ComponentType<{userId?: number}>}
 * @see PerformanceChartReal
 */
const PerformanceChart = PerformanceChartReal;

/**
 * Composant graphique circulaire de score
 * @type {React.ComponentType<{userId?: number}>}
 * @see ScoreChartReal
 */
const ScoreChart = ScoreChartReal;

export { ActivityChart, SessionsChart, PerformanceChart, ScoreChart };
