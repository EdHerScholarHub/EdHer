import type { FTSearchFormSchema } from "../validators/form-validators";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export type Setterify<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
};

export const extractValidSearchParams = (input: FTSearchFormSchema) => {
  return Object.entries(input)
    .reduce((acc, curr) => {
      const [key, value] = curr;
      if (value) {
        return [...acc, `${key}=${value}`];
      }
      return acc;
    }, [] as string[])
    .join("&");
};

export const searchParamsToString = (input: FTSearchFormSchema) => {
  return Object.entries(input)
    .reduce((acc, curr) => {
      const [_, value] = curr;
      if (value) {
        return [...acc, `"${value}"`];
      }
      return acc;
    }, [] as string[])
    .join(" and ");
};
