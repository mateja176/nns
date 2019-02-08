import { pipe } from "ramda"
import splitByNewLine from "../../utils/splitByNewLine"
import joinByNewLine from "./joinByNewLine"
import trim from "./trim"

export default pipe(
  splitByNewLine,
  (a: string[]) => a.filter((s: string) => Boolean(trim(s))),
  joinByNewLine,
)
