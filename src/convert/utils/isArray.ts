import { any, pipe } from "ramda"
import splitByLeadingNonSpaceChar from "./splitByLeadingNonSpaceChar"

export default pipe(
  splitByLeadingNonSpaceChar,
  any(s => /\n\n$/.test(s)),
)
