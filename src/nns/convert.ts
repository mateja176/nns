import { includes, map, pipe } from "ramda"
import filterEmptyLines from "./utils/filterEmptyLines"
import isArray from "./utils/isArray"
import splitByLeadingNonSpaceChar from "./utils/splitByLeadingNonSpaceChar"
import splitKeyAndValue from "./utils/splitKeyAndValue"
import toObject from "./utils/toObject"

const convert = pipe(
  filterEmptyLines,
  (s: string) => {
    if (includes("\n")(s)) {
      if (isArray(s)) {
        return map(convert)(splitByLeadingNonSpaceChar(s))
      } else {
        return toObject(convert)(splitKeyAndValue(s))
      }
    } else {
      return s
    }
  },
)

export default convert
