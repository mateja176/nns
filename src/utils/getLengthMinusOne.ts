import { dec, length, pipe } from "ramda"
import splitByNewLine from "./splitByNewLine"

export default pipe(
  splitByNewLine,
  length,
  dec,
)
