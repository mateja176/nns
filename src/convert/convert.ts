import { flatten, includes, map, pipe, reduce, startsWith } from "ramda"
import slice from "../utils/slice"
import splitByNewLine from "../utils/splitByNewLine"
import filterEmptyLines from "./utils/filterEmptyLines"
import joinByNewLine from "./utils/joinByNewLine"
import splitByLeadingNonSpaceChar from "./utils/splitByLeadingNonSpaceChar"

const convert = pipe(
  splitByNewLine,
  filterEmptyLines,
  joinByNewLine,
  (s: string) => {
    if (startsWith("    ")(s)) {
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
  // @ts-ignore
  filterEmptyLines,
  map(convert),
)

export const toValue = pipe(
  // @ts-ignore
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
