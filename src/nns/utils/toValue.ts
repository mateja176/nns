import { map, pipe } from "ramda"
import sliceFrom from "../../utils/slice/from"
import joinByNewLine from "./joinByNewLine"

export default pipe(
  map(sliceFrom(2)),
  joinByNewLine,
)
