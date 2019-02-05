import { all, pipe, test } from "ramda"
import splitByNewLine from "../../utils/splitByNewLine"

export default pipe(
  splitByNewLine,
  all(test(/^\S/)),
)
