import { API, graphqlOperation } from "aws-amplify";

function cleanArray(arr) {
  arr = arr
    .filter(el => el !== undefined && el !== null) // Remove all null/undefined/NaN from array
    .map(cleanObject); // Clean each element of the array
  return arr.length === 0 ? null : arr;
}

function cleanString(str) {
  str = str.trim(); // No unnecessary whitespaces
  return str === "" ? null : str; // Empty strings convert to null values
}

function cleanObject(arg) {
  if (arg === undefined || arg === null || Number.isNaN(arg)) return null;
  if (typeof arg === "string") return cleanString(arg);
  if (typeof arg !== "object") return arg;
  const entries = Object.entries(arg).map(([key, value]) => {
    switch (typeof value) {
      case "number":
        return [key, Number.isNaN(value) ? null : value];
      case "string":
        return [key, cleanString(value)];
      case "object":
        return [
          key,
          Array.isArray(value) ? cleanArray(value) : cleanObject(value)
        ];
      default:
        return [key, value];
    }
  });
  return Object.fromEntries(entries);
}

// Constructs query that will be sent to the GQL API
function getQuery(queryTemplate, queryParams) {
  queryParams = cleanObject(queryParams); // Cleanup any and all strings that go into DDB
  return graphqlOperation(queryTemplate, queryParams);
}

export function runQuery(queryTemplate, params) {
  return API.graphql(getQuery(queryTemplate, params));
}
