/**
 * Composant Tooltip personnalisé pour le graphique d'activité
 *
 * Affiche les valeurs de poids et calories au survol des barres du graphique d'activité.
 * Formate les données avec les unités appropriées (kg, kCal).
 *
 * @component
 * @param {Object} props - Propriétés du tooltip
 * @param {boolean} props.active - Indique si le tooltip est actif (au survol)
 * @param {Array} props.payload - Données des barres survolées
 * @returns {JSX.Element|null} Tooltip formaté ou null si inactif
 *
 * @example
 * // Utilisation dans ActivityChart avec recharts
 * <ComposedChart data={activityData}>
 *   <Tooltip content={<ActivityTooltip />} />
 *   <Bar dataKey="kilogram" />
 *   <Bar dataKey="calories" />
 * </ComposedChart>
 *
 * @example
 * // Structure du payload attendu
 * // payload = [
 * //   { dataKey: 'kilogram', value: 70 },
 * //   { dataKey: 'calories', value: 300 }
 * // ]
 */
import './charts.css';

const ActivityTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // On suppose que payload contient les deux valeurs : kilogram et calories
    const poids = payload.find((entry) => entry.dataKey === 'kilogram');
    const calories = payload.find((entry) => entry.dataKey === 'calories');
    return (
      <div className="activity-tooltip">
        {poids && (
          <p className="activity-tooltip-value">{poids.value}kg</p>
        )}
        {calories && (
          <p className="activity-tooltip-value">{calories.value}kCal</p>
        )}
      </div>
    );
  }
  return null;
};

export default ActivityTooltip;
