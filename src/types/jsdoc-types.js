/**
 * @fileoverview Définitions des types JSDoc pour l'application SportSee
 *
 * Ce fichier centralise toutes les définitions de types utilisées dans la documentation JSDoc
 * du projet SportSee pour assurer la cohérence et faciliter la maintenance.
 *
 * @module types/jsdoc-types
 * @author Maxime N
 * @since 1.0.0
 */

/**
 * @namespace JSDocTypes
 * @description Types personnalisés pour la documentation SportSee
 */

/**
 * Données utilisateur complètes
 * @typedef {Object} UserData
 * @property {number} id - ID unique de l'utilisateur
 * @property {UserInfos} userInfos - Informations personnelles
 * @property {number} todayScore - Score du jour (valeur entre 0 et 1)
 * @property {number} [score] - Score alternatif (si todayScore n'existe pas)
 * @property {KeyData} keyData - Statistiques nutritionnelles
 */

/**
 * Informations personnelles de l'utilisateur
 * @typedef {Object} UserInfos
 * @property {string} firstName - Prénom de l'utilisateur
 * @property {string} lastName - Nom de famille de l'utilisateur
 * @property {number} age - Âge de l'utilisateur
 */

/**
 * Données nutritionnelles clés
 * @typedef {Object} KeyData
 * @property {number} calorieCount - Nombre total de calories
 * @property {number} proteinCount - Quantité de protéines en grammes
 * @property {number} carbohydrateCount - Quantité de glucides en grammes
 * @property {number} lipidCount - Quantité de lipides en grammes
 */

/**
 * Données d'activité quotidienne
 * @typedef {Object} ActivityData
 * @property {number} userId - ID de l'utilisateur
 * @property {ActivitySession[]} sessions - Sessions d'activité par jour
 */

/**
 * Session d'activité quotidienne
 * @typedef {Object} ActivitySession
 * @property {string} day - Date de la session (format YYYY-MM-DD)
 * @property {number} kilogram - Poids de l'utilisateur en kilogrammes
 * @property {number} calories - Calories brûlées pendant la session
 */

/**
 * Données de sessions d'entraînement
 * @typedef {Object} SessionsData
 * @property {number} userId - ID de l'utilisateur
 * @property {SessionLength[]} sessions - Durées des sessions par jour de la semaine
 */

/**
 * Durée d'une session d'entraînement
 * @typedef {Object} SessionLength
 * @property {number} day - Jour de la semaine (1=Lundi, 7=Dimanche)
 * @property {number} sessionLength - Durée de la session en minutes
 */

/**
 * Données de performance sportive
 * @typedef {Object} PerformanceData
 * @property {number} userId - ID de l'utilisateur
 * @property {Object<number, string>} kind - Mapping des types de performance (1=cardio, 2=energy, etc.)
 * @property {PerformanceValue[]} data - Valeurs de performance par type
 */

/**
 * Valeur de performance pour un type spécifique
 * @typedef {Object} PerformanceValue
 * @property {number} value - Valeur numérique de la performance
 * @property {number} kind - ID du type de performance (référence vers le mapping kind)
 */

/**
 * État de retour des hooks de données
 * @typedef {Object} DataHookResult
 * @template T
 * @property {T|null} data - Les données récupérées (null si pas encore chargées ou en cas d'erreur)
 * @property {boolean} loading - Indicateur de chargement en cours
 * @property {string|null} error - Message d'erreur éventuel
 */

/**
 * État de retour des hooks de graphiques
 * @typedef {Object} ChartHookState
 * @template T
 * @property {T|null} data - Données formatées pour le graphique (null si pas chargées)
 * @property {boolean} loading - Indicateur de chargement
 * @property {string|null} error - Message d'erreur éventuel
 */

/**
 * État global de tous les graphiques
 * @typedef {Object} AllChartsState
 * @property {*} activity - Données formatées du graphique d'activité
 * @property {*} sessions - Données formatées du graphique de sessions
 * @property {*} performance - Données formatées du graphique de performance
 * @property {*} score - Données formatées du graphique de score
 * @property {boolean} loading - true si au moins un graphique est en cours de chargement
 * @property {boolean} hasError - true si au moins un graphique a une erreur
 * @property {ChartErrors} errors - Détail des erreurs par graphique
 */

/**
 * Erreurs spécifiques par type de graphique
 * @typedef {Object} ChartErrors
 * @property {string|null} activity - Erreur du graphique d'activité
 * @property {string|null} sessions - Erreur du graphique de sessions
 * @property {string|null} performance - Erreur du graphique de performance
 * @property {string|null} score - Erreur du graphique de score
 */

/**
 * Session d'activité formatée pour graphique
 * @typedef {Object} FormattedActivitySession
 * @property {number} day - Numéro du jour (1-7)
 * @property {number} kilogram - Poids en kilogrammes
 * @property {number} calories - Calories brûlées
 * @property {string} displayDay - Jour formaté pour affichage ("1", "2", etc.)
 */

/**
 * Session formatée pour graphique de sessions avec points fantômes
 * @typedef {Object} FormattedSession
 * @property {number} day - Jour (0-8, incluant points fantômes)
 * @property {number} dayIndex - Index du jour
 * @property {number} sessionLength - Durée en minutes
 * @property {boolean} isReal - true pour les vraies sessions, false pour les points fantômes
 * @property {boolean} [isGhost] - true pour les points fantômes uniquement
 */

/**
 * Donnée de performance formatée pour radar
 * @typedef {Object} FormattedPerformanceData
 * @property {string} subject - Nom du type de performance en français
 * @property {number} value - Valeur de la performance
 * @property {number} fullMark - Valeur maximale pour le graphique (généralement 250)
 */

/**
 * Données de score formatées
 * @typedef {Object} FormattedScoreData
 * @property {number} percentage - Pourcentage de réalisation de l'objectif (0-100)
 */

// Export pour éviter les erreurs ESLint
export {};
