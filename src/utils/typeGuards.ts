/* eslint-disable jsdoc/require-jsdoc */
import { Target } from "../interfaces/Target";

export const isNaomi = (target: Target): target is "naomi" =>
  target === "naomi";

export const isBecca = (target: Target): target is "becca" =>
  target === "becca";

export const isRosalia = (target: Target): target is "rosalia" =>
  target === "rosalia";

export const isBeccalia = (target: Target): target is "beccalia" =>
  target === "beccalia";

export const isNovas = (target: Target): target is "novas" =>
  target === "novas";
