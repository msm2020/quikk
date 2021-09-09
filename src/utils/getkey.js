import { tagIndex } from "Data/Jobs";

export const getKey = (value, prop) => {
  return prop === "next"
    ? Object.keys(tagIndex).find((key) => tagIndex[key] === value + 1)
    : Object.keys(tagIndex).find((key) => tagIndex[key] === value - 1);
};
