import { Target } from "../interfaces/Target";

/**
 * Confirms that the target is Naomi.
 *
 * @param {string} target The target to test.
 * @returns {boolean} If the target is Naomi.
 */
export const isNaomi = (target: Target): target is "naomi" =>
  target === "naomi";

/**
 * Confirms that the target is Becca.
 *
 * @param {string} target The target to test.
 * @returns {boolean} If the target is Becca.
 */
export const isBecca = (target: Target): target is "becca" =>
  target === "becca";

/**
 * Confirms that the target is Rosalia.
 *
 * @param {string} target The target to test.
 * @returns {boolean} If the target is Rosalia.
 */
export const isRosalia = (target: Target): target is "rosalia" =>
  target === "rosalia";

/**
 * Confirms that the target is Beccalia.
 *
 * @param {string} target The target to test.
 * @returns {boolean} If the target is Beccalia.
 */
export const isBeccalia = (target: Target): target is "beccalia" =>
  target === "beccalia";

/**
 * Confirms that the target is Novas.
 *
 * @param {string} target The target to test.
 * @returns {boolean} If the target is Novas.
 */
export const isNovas = (target: Target): target is "novas" =>
  target === "novas";

/**
 * Confirms that the response is an array of strings.
 *
 * @param {unknown[]} response The response to test.
 * @returns {boolean} If the response is an array of strings.
 */
export const isStringArray = (response: unknown[]): response is string[] =>
  response.every((item) => typeof item === "string");
