import { map, pipe } from "ramda"
import sliceFrom from "../../utils/sliceFrom"
import joinByNewLine from "./joinByNewLine"

export default pipe(
  map(sliceFrom(2)),
  joinByNewLine,
)
