import { map, pipe } from "ramda"
import splitByNewLine from "../../utils/splitByNewLine"
import splitByLeadingNonSpaceChar from "./splitByLeadingNonSpaceChar"

export default pipe(
  splitByLeadingNonSpaceChar,
  map(splitByNewLine),
)
