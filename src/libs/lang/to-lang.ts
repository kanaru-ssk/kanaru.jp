import { DEFAULT_LANG, isLang, type Lang } from "./lang";

export function toLang(value: unknown): Lang {
  if (isLang(value)) return value;
  return DEFAULT_LANG;
}
