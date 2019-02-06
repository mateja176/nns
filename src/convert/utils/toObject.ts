import { map, pipe } from "ramda"
import fromEntries from "./fromEntries"
import toValue from "./toValue"

export default (convert: (s: string) => any) =>
  pipe(
    map(([key, ...value]) => [key, convert(toValue(value))]),
    fromEntries,
  )
