/**
 * Composant graphique circulaire de score quotidien SportSee
 *
 * Affiche le pourcentage de réalisation de l'objectif quotidien sous forme
 * de graphique en secteurs (doughnut chart) avec texte central.
 * Utilise todayScore ou score depuis les données utilisateur.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {number} [props.userId=18] - ID de l'utilisateur pour lequel afficher le score
 * @returns {JSX.Element} Graphique circulaire de score ou état de chargement/erreur
 *
 * @example
 * // Utilisation basique avec utilisateur par défaut
 * <ScoreChart />
 *
 * @example
 * // Utilisation avec utilisateur spécifique
 * <ScoreChart userId={12} />
 *
 * @example
 * // Intégration dans une grille de graphiques
 * function MetricsGrid({ userId }) {
 *   return (
 *     <div className="metrics-grid">
 *       <ScoreChart userId={userId} />
 *     </div>
 *   );
 * }
 *
 * @requires recharts
 * @requires ../../services/chartHooks.js
 * @uses {ChartHookState<FormattedScoreData>} useScoreChart
 */
import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { useScoreChart } from '../../services/hooks/chartHooks.js';
import './charts.css';

const ScoreChart = ({ userId = 18 }) => {
  const { data, loading, error } = useScoreChart(userId);

  if (loading) {
    return <div className="chart-loading">Chargement...</div>;
  }

  if (error) {
    return <div className="chart-error">Erreur: {error}</div>;
  }

  if (!data) {
    return <div className="chart-empty">Aucune donnée</div>;
  }

  // Récupération du pourcentage transformé
  const scorePercentage = data.percentage;

  // Données pour le graphique en secteurs
  const chartData = [
    { name: 'Score', value: scorePercentage, fill: '#FF0101' },
    { name: 'Reste', value: 100 - scorePercentage, fill: 'transparent' }
  ];

  return (
    <div className="score-chart">
      <h3 className="chart-title">Score</h3>

      <div className="score-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={450}
              innerRadius="60%"
              outerRadius="75%"
              dataKey="value"
              cornerRadius={15}
              paddingAngle={0}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="score-content">
          <div className="score-percentage">{scorePercentage}%</div>
          <div className="score-label">de votre</div>
          <div className="score-label">objectif</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreChart;
