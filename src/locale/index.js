import { en } from "./en";
import { ru } from "./ru";
import { uz } from "./uz";

export const LANGUANGE = "uz";

export const getLanguage = () => {
  return localStorage.getItem(LANGUANGE);
};

export const getText = (word) => {
  return getLanguage() === "ru"
    ? ru[word]
    : getLanguage() === "en"
    ? en[word]
    : uz[word];
};
