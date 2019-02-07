import { pipe, trim } from "ramda"
import splitByNewLine from "../../utils/splitByNewLine"
import joinByNewLine from "./joinByNewLine"

export default pipe(
  splitByNewLine,
  (a: string[]) => a.filter((s: string) => Boolean(trim(s))),
  joinByNewLine,
)
