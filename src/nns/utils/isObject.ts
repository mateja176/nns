import { any, pipe } from "ramda"
import splitByNewLine from "../../utils/splitByNewLine"

export default pipe(
  splitByNewLine,
  any((s: string) => /^\s/.test(s)),
)
