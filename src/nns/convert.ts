import { includes, map, pipe } from "ramda"
import filterEmptyLines from "./utils/filterEmptyLines"
import isObject from "./utils/isObject"
import splitKeyAndValue from "./utils/splitKeyAndValue"
import toArray from "./utils/toArray"
import toObject from "./utils/toObject"

const convert = pipe(
  filterEmptyLines,
  (s: string) => {
    if (isObject(s)) {
      return toObject(convert)(splitKeyAndValue(s))
    } else if (includes("\n")(s)) {
      return map(convert)(toArray(s))
    } else {
      return s
    }
  },
)

export default convert
