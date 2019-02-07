import { includes, map, pipe } from "ramda"
import isArray from "./utils/isArray"
import splitKeyAndValue from "./utils/splitKeyAndValue"
import toArray from "./utils/toArray"
import toObject from "./utils/toObject"
import trim from "./utils/trim"

const convert = pipe(
  trim,
  (s: string) => {
    if (isArray(s)) {
      return map(convert)(toArray(s))
    } else if (includes("\n")(s)) {
      return toObject(convert)(splitKeyAndValue(s))
    } else {
      return s
    }
  },
)

export default convert
