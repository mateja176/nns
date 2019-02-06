import { pipe } from "ramda"
import leadingEmptyLines from "./leadingEmptyLines"
import trailingEmptyLines from "./trailingEmptyLines"

export default pipe(
  leadingEmptyLines,
  trailingEmptyLines,
)
