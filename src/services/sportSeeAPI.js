/**
 * Service API simplifié pour SportSee - Interface compatible avec DataService
 *
 * Ce module fournit une interface simplifiée pour accéder aux données SportSee.
 * Il utilise DataService en arrière-plan et peut basculer entre mode API et mode mock.
 *
 * @module sportSeeAPI
 * @requires ./DataService.js
 * @author SportSee Team
 * @since 1.0.0
 *
 * @example
 * // Import du service
 * import { sportSeeAPI } from './services/sportSeeAPI.js';
 *
 * @example
 * // Utilisation basique
 * const userData = await sportSeeAPI.getUserById(18);
 * const activity = await sportSeeAPI.getUserActivity(18);
 */

import { DataService } from "./DataService.js";

/**
 * Objet principal du service API SportSee
 *
 * Fournit des méthodes async pour récupérer les données utilisateur.
 * Utilise DataService en arrière-plan pour la gestion des données.
 *
 * @namespace sportSeeAPI
 * @type {Object}
 */
export const sportSeeAPI = {
  /**
   * Récupère les informations complètes d'un utilisateur
   *
   * @async
   * @function getUserById
   * @memberof sportSeeAPI
   * @param {number} [userId=18] - ID de l'utilisateur à récupérer
   * @returns {Promise<UserData>} Les données complètes de l'utilisateur
   * @throws {Error} Erreur si l'utilisateur n'existe pas ou si l'API échoue
   *
   * @example
   * // Récupération avec ID spécifique
   * const user = await sportSeeAPI.getUserById(18);
   * console.log(`Bonjour ${user.userInfos.firstName}!`);
   *
   * @example
   * // Récupération avec ID par défaut
   * const defaultUser = await sportSeeAPI.getUserById();
   */
  async getUserById(userId = 18) {
    return await DataService.getUserById(userId);
  },

  /**
   * Récupère les données d'activité quotidienne d'un utilisateur
   *
   * @async
   * @function getUserActivity
   * @memberof sportSeeAPI
   * @param {number} [userId=18] - ID de l'utilisateur
   * @returns {Promise<ActivityData>} Les données d'activité avec sessions de poids et calories
   * @throws {Error} Erreur si les données n'existent pas ou si l'API échoue
   *
   * @example
   * const activity = await sportSeeAPI.getUserActivity(18);
   * activity.sessions.forEach(session => {
   *   console.log(`${session.day}: ${session.kilogram}kg, ${session.calories}cal`);
   * });
   */
  async getUserActivity(userId = 18) {
    return await DataService.getUserActivity(userId);
  },

  /**
   * Récupère les durées moyennes des sessions d'entraînement par jour de la semaine
   *
   * @async
   * @function getUserAverageSessions
   * @memberof sportSeeAPI
   * @param {number} [userId=18] - ID de l'utilisateur
   * @returns {Promise<SessionsData>} Les données de durée moyenne par jour (1=Lundi, 7=Dimanche)
   * @throws {Error} Erreur si les données n'existent pas ou si l'API échoue
   *
   * @example
   * const sessions = await sportSeeAPI.getUserAverageSessions(18);
   * const mondaySession = sessions.sessions.find(s => s.day === 1);
   * console.log(`Lundi: ${mondaySession.sessionLength} minutes`);
   */
  /**
   * Récupère les données de durée moyenne des sessions d'un utilisateur
   *
   * @async
   * @function getUserAverageSessions
   * @memberof sportSeeAPI
   * @param {number} [userId=18] - ID de l'utilisateur
   * @returns {Promise<SessionsData>} Les données de sessions avec durées moyennes
   * @throws {Error} Erreur si les données n'existent pas ou si l'API échoue
   *
   * @example
   * const sessions = await sportSeeAPI.getUserAverageSessions(18);
   * const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
   * sessions.sessions.forEach((session, index) => {
   *   console.log(`${dayNames[session.day - 1]}: ${session.sessionLength}min`);
   * });
   */
  async getUserAverageSessions(userId = 18) {
    return await DataService.getUserAverageSessions(userId);
  },

  /**
   * Récupère les données de performance sportive d'un utilisateur
   *
   * @async
   * @function getUserPerformance
   * @memberof sportSeeAPI
   * @param {number} [userId=18] - ID de l'utilisateur
   * @returns {Promise<PerformanceData>} Les données de performance avec mapping des types
   * @throws {Error} Erreur si les données n'existent pas ou si l'API échoue
   *
   * @example
   * const performance = await sportSeeAPI.getUserPerformance(18);
   * performance.data.forEach(perf => {
   *   const type = performance.kind[perf.kind];
   *   console.log(`${type}: ${perf.value}`);
   * });
   */
  async getUserPerformance(userId = 18) {
    return await DataService.getUserPerformance(userId);
  },

  /**
   * Configure le mode d'utilisation des données (mock ou API)
   * @see {@link DataService.setMockMode}
   * @type {Function}
   */
  // Méthodes utilitaires
  setMockMode: DataService.setMockMode,

  /**
   * Retourne le mode de fonctionnement actuel
   * @see {@link DataService.getCurrentMode}
   * @type {Function}
   */
  getCurrentMode: DataService.getCurrentMode,
};

/**
 * Export par défaut du service API SportSee
 * @type {Object}
 * @default sportSeeAPI
 */
export default sportSeeAPI;
