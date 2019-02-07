import { map, pipe } from "ramda"
import splitByLeadingNonSpaceChar from "./splitByLeadingNonSpaceChar"
import trimTrailingEmptyLines from "./trim/trailingEmptyLines"

export default pipe(
  splitByLeadingNonSpaceChar,
  map(trimTrailingEmptyLines),
)
