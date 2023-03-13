import xml2js from "xml2js";

/**
 * Gets a list of available files from the CDN.
 *
 * @param {string} prefix The prefix to query, i.e. `rosalia/art`.
 * @returns {string[]} The list of files matching the prefix.
 */
export const getFileList = async (prefix: string): Promise<string[]> => {
  const parser = new xml2js.Parser();
  const rawData = await fetch(
    `https://sfo3.digitaloceanspaces.com/naomi-cdn?prefix=${prefix}`
  );
  const rawText = await rawData.text();
  const parsedXML = await parser.parseStringPromise(rawText);
  const fileList: string[] = parsedXML.ListBucketResult.Contents.map(
    (file: { Key: string[] }) => file.Key[0].split("/").slice(-1)[0]
  );
  return fileList;
};
