import { map, pipe } from "ramda"
import fromEntries from "./fromEntries"
import toValue from "./toValue"

export default <A>(convert: (s: string) => A) =>
  pipe(
    map(([key, ...value]) => [key, convert(toValue(value))]),
    fromEntries,
  )
