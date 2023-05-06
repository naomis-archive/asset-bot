import {
  AssetResponseType,
  AssetType,
  Namespace,
} from "../interfaces/AssetTypes";

/**
 * Gets a list of available files from the CDN.
 *
 * @template T The type of the response.
 * @param {Namespace} namespace The namespace to fetch.
 * @param {AssetType} assetType The asset type to fetch.
 * @returns {T} The list of files matching the prefix.
 */
export const getFileList = async <T extends AssetResponseType>(
  namespace: Namespace,
  assetType: AssetType
): Promise<T> => {
  const raw = await fetch(
    `https://asset-list.naomi.lgbt/json/${namespace}/${assetType}.json`
  );
  const parsed = (await raw.json()) as T;
  return parsed;
};
