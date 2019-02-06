// TODO simplify when tests are complete

import { includes, map, pipe, reduce } from "ramda";
import { isArray } from "util";
import slice from "../utils/slice";
import splitByNewLine from "../utils/splitByNewLine";
import filterEmptyLines from "./utils/filterEmptyLines";
import flatten from "./utils/flatten";
import joinByNewLine from "./utils/joinByNewLine";
import splitByLeadingNonSpaceChar from "./utils/splitByLeadingNonSpaceChar";
import trimLeadingEmptyLines from "./utils/trimLeadingEmptyLines";
import trimTrailingEmptyLines from "./utils/trimTrailingEmptyLines";

const convert = pipe(
  trimLeadingEmptyLines,
  trimTrailingEmptyLines,
  (s: string) => {
    if (isArray(s)) {
      return toArray(s)
    } else if (includes("\n")(s)) {
      return toObject(s)
    } else {
      return s
    }
  },
)

export default convert

const toArray = pipe(
  splitByNewLine,
  filterEmptyLines,
  map(slice(4)(Infinity)),
  joinByNewLine,
  splitByLeadingNonSpaceChar,
  map((s: string) => {
    const [value, ...values] = splitByNewLine(s)

    return [value, joinByNewLine(values)]
  }),
  flatten,
  filterEmptyLines,
  map(convert),
)

export const toValue = pipe(
  map(slice(2)(Infinity)),
  joinByNewLine,
  convert,
)

export const toObject = pipe(
  splitByLeadingNonSpaceChar,
  filterEmptyLines,
  reduce((o, keyAndValue) => {
    const [key, ...value] = splitByNewLine(keyAndValue)

    return {
      ...o,
      [key]: toValue(value),
    }
  }, {}),
)
